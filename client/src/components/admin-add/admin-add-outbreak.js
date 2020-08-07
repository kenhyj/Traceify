import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './admin-add.css';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import axios from 'axios/index';
import Instruction from '../instruction/instruction';

const getTime = (date)=>{
  let tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
  let localISOTime = (new Date(date - tzoffset));
  return localISOTime;
}

class AdminAddOutbreak extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSearchField: '',
      submissionObj: {
        title: '',
        location: {
          lat: 0,
          lng: 0,
        },
        city: 'Vancouver',
        date: new Date(),
        formattedAddress: '',
      },
    };
  }

  handleDateChange = (date) => {
    let temp = this.state.submissionObj;
    temp = {
      ...temp,
      date: date,
    };
    this.setState({
      submissionObj: temp,
    });
  };

  handleChange = (address) => {
    this.setState({
      locationSearchField: address,
    });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        const addrData = results[0];
        const formattedAddr = addrData.formatted_address;
        let temp = this.state.submissionObj;
        temp = {
          ...temp,
          formattedAddress: formattedAddr,
        };
        this.setState({
          submissionObj: temp,
        });
        return addrData;
      })
      .then((addr) => getLatLng(addr))
      .then((latLng) => {
        let temp = this.state.submissionObj;
        temp = {
          ...temp,
          location: {
            lat: latLng.lat,
            lng: latLng.lng,
          },
        };
        this.setState({
          submissionObj: temp,
        });
        this.setState({
          locationSearchField: address,
        });
      })
      .catch((error) => console.error('Error', error));
  };

  handleSubmit = () => {
    const validCities = [
      'vancouver',
      'north vancouver',
      'west vancouver',
      'surrey',
      'richmond',
      'coquitlam',
      'burnaby',
      'langley',
    ];
    let validSubmission = false;
    let title = '';
    let city = '';
    const array = this.state.locationSearchField.split(', ');
    for (let i = 0; i < array.length; i++) {
      if (validCities.indexOf(array[i].toLowerCase()) > -1) {
        city = array[i];
        validSubmission = true;
        for (let j = 0; j < i; j++)
          j + 1 === i ? (title += array[j]) : (title = `${title + array[j]}, `);
      }
    }
    if (validSubmission) {
      let temp = this.state.submissionObj;
      temp = {
        ...temp,
        title: title,
        city: city,
        date: getTime(temp.date).toISOString(),
      };
      axios
        .post('/api/location-outbreak', temp)
        .then(() => alert('Submission Successful'))
        .catch(() => alert('Submission Failed'));
    } else
      alert(
        'The submission data must be a place within: Vancouver | North Vancouver | West Vancouver | Richmond | Surrey | Coquitlam | Burnaby | Langley'
      );
  };

  render() {
    return (
      <div>
        <Instruction text='Please input the information of the place where an outbreak has been declared.' />
        <br />
        <form className='form'>
          <label>
            <p className='label'>Location</p>
            <PlacesAutocomplete
              value={this.state.locationSearchField}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              searchOptions={{
                componentRestrictions: { country: ['ca'] },
              }}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    className='input'
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className='autocomplete-dropdown-container'>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </label>
          <br />
          <label className='customDatePickerWidth'>
            <p className='label'>Date</p>
            <DatePicker
              utcOffset={8}
              selected={this.state.submissionObj.date}
              onChange={this.handleDateChange}
            />
          </label>
          <br />
          <br />
          <br />
          <br />
          <Button className='button' onClick={() => this.handleSubmit()}>
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.website.accessToken,
  };
};

export default withRouter(connect(mapStateToProps)(AdminAddOutbreak));
