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

import 'react-datepicker/dist/react-datepicker.css';

class AdminPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            address: ''
        };
    }

    handleDateChange = date => {
        this.setState({
            date: date
        });
    };

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render () {
        return (
            <div>
                <h1>ADMIN PAGE</h1> <br /><br />
                ACCESSTOKEN: {this.props.accessToken} <br /><br /><br /><br />
                Welcome, {this.props.user} !!<br /><br />Please input the information of all the places the positive patient visited.<br /><br /><br /><br />
                <form>
                    <label>
                        Location:
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                        >{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input
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
                    <label>
                        Date:<br/>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleDateChange}
                        />
                    </label>
                    <br/><br/>
                    <label>
                        Time:<br/>
                        <select>
                            <option value="grapefruit">12 AM ~ 3 AM</option>
                            <option value="lime">3 AM ~ 6 AM</option>
                            <option selected value="coconut">6 AM ~ 9AM</option>
                            <option value="mango">9 AM ~ 12 PM</option>
                            <option value="grapefruit">12 PM ~ 3 PM</option>
                            <option value="lime">3 PM ~ 6 PM</option>
                            <option selected value="coconut">6 PM ~ 9 PM</option>
                            <option value="mango">9 PM ~ 12 AM</option>
                        </select>
                    </label><br/><br/>
                    <label>
                        Region:<br/>
                        <input/>
                    </label><br/><br/><br/><br/>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.website.accessToken,
        user: state.website.user
    };
};

export default withRouter(connect(mapStateToProps)(AdminPage));
