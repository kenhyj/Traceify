import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import './admin-add.css';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import Instruction from '../instruction/instruction';
import axios from "axios/index";

class AdminAdd extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            locationSearchField: '',
            submissionObj: {
                title: '',
                location: {
                    lat: 0,
                    lng: 0
                },
                city: 'Vancouver',
                time: '12 AM ~ 3 AM',
                date: new Date()
            }
        };
    }

    handleDateChange = date => {
        console.log("DATE: "+date.toISOString());
        let temp = this.state.submissionObj;
        temp = {
            ...temp,
            date: date
        };
        this.setState({
            submissionObj: temp
        });
    };

    handleChange = address => {
        this.setState({
            locationSearchField: address
        })
    };

    handleTimeChange = event => {
        let temp = this.state.submissionObj;
        temp = {
            ...temp,
            time: event.target.value
        };
        this.setState({
            submissionObj: temp
        });
    };

    handleSelect = address => {
        console.log("ADDRESS: "+address);
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                let temp = this.state.submissionObj;
                temp = {
                    ...temp,
                    location: {
                        lat: latLng.lat,
                        lng: latLng.lng
                    }
                };
                this.setState({
                    submissionObj: temp
                });
            })
            .catch(error => console.error('Error', error));
    };

    handleSubmit = () => {
        let validCities = ['vancouver', 'north vancouver', 'west vancouver', 'surrey', 'richmond', 'coquitlam', 'burnaby', 'langley'];
        let validSubmission = false;
        let title = '';
        let city = '';
        let array = this.state.locationSearchField.split(", ");
        for (let i = 0; i < array.length ; i++) {
            if (validCities.indexOf(array[i].toLowerCase()) > -1) {
                city = array[i];
                validSubmission = true;
                for (let j = 0; j < i ; j++)
                    j+1 === i? title += array[j] : title = title + array[j] + ", "
            }
        }
        if (validSubmission) {
            let temp = this.state.submissionObj;
            temp = {
                ...temp,
                title: title,
                city: city,
                date: temp.date.toISOString()
            };
            console.log(temp);
            axios.post('/api/location-trace', temp).then( () =>
                alert("Submission Successful")
            ).catch( () =>
                alert("Submission Failed")
            )
        } else alert("The submission data must be a place within: Vancouver | North Vancouver | West Vancouver | Richmond | Surrey | Coquitlam | Burnaby | Langley")
    };

    render () {
        return (
            <div>
                <Instruction text="Please input the information of the place where the positive patient visited."/>
                <br/>
                <form className="form">
                    <label>
                        <p className="label">Location</p>
                        <PlacesAutocomplete
                            value={this.state.locationSearchField}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                            searchOptions={{
                                componentRestrictions: { country: ['ca'] }
                            }}
                        >{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input className="input"
                                       {...getInputProps({
                                           placeholder: 'Search Places ...',
                                           className: 'location-search-input',
                                       })}
                                />
                                <div className="autocomplete-dropdown-container">
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
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
                    </label><br/>
                    <label className="customDatePickerWidth">
                        <p className="label">Date</p>
                        <DatePicker
                            utcOffset={8}
                            selected={this.state.submissionObj.date}
                            onChange={this.handleDateChange}
                        />
                    </label>
                    <br/><br/>
                    <label>
                        <p className="label">Time</p>
                        <select value={this.state.submissionObj.time} onChange={this.handleTimeChange}  className="input">
                            <option selected value="12 AM ~ 3 AM">12 AM ~ 3 AM</option>
                            <option value="3 AM ~ 6 AM">3 AM ~ 6 AM</option>
                            <option value="6 AM ~ 9AM">6 AM ~ 9AM</option>
                            <option value="9 AM ~ 12 PM">9 AM ~ 12 PM</option>
                            <option value="12 PM ~ 3 PM">12 PM ~ 3 PM</option>
                            <option value="3 PM ~ 6 PM">3 PM ~ 6 PM</option>
                            <option value="6 PM ~ 9 PM">6 PM ~ 9 PM</option>
                            <option value="9 PM ~ 12 AM">9 PM ~ 12 AM</option>
                        </select>
                    </label><br/><br/>
                    <br/><br/>
                    <Button className="button" onClick={() => this.handleSubmit()}>SUBMIT</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.website.accessToken
    };
};

export default withRouter(connect(mapStateToProps)(AdminAdd));
