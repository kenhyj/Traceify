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

import './admin-page.css';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import axios from "axios/index";

// const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
// const script = document.createElement('script');
// script.src="https://maps.googleapis.com/maps/api/js?key="+API_KEY+"&libraries=places";
// document.head.append(script);

class AdminPage extends React.Component {
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

    // handleCityChange = event => {
    //     let temp = this.state.submissionObj;
    //     temp = {
    //         ...temp,
    //         location: {
    //             lat: latLng.lat,
    //             lng: latLng.lng
    //         }
    //     };
    //     this.setState({
    //         submissionObj: temp
    //     });
    //     this.setState({
    //         city: event.target.value
    //     })
    // };

    handleSubmit = () => {
        // TODO: Check if within , city: ['vancouver', 'north vancouver', 'west vancouver', 'surrey', 'richmond', 'coquitlam', 'burnaby', 'langley']
        let temp = this.state.submissionObj;
        console.log(temp);
        if (temp.title !== '' && temp.location.lat !== 0) {
            temp = {
                ...temp,
                date: temp.date.toISOString()
            };
            axios.post('/admins/location-trace', temp).then( () =>
                alert("Submission Successful")
            ).catch( () =>
                alert("Submission Failed")
            )
        } else alert("Please input all the required fields")
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
                            value={this.state.locationSearchField}
                            onChange={this.handleChange}
                            onSelect={this.handleSelect}
                            searchOptions={{
                                componentRestrictions: { country: ['ca'] }
                            }}
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
                            selected={this.state.submissionObj.date}
                            onChange={this.handleDateChange}
                        />
                    </label>
                    <br/><br/>
                    <label>
                        Time:<br/>
                        <select value={this.state.submissionObj.time} onChange={this.handleTimeChange}>
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
                    {/*
                    <label>
                        City:<br/>
                        <select value={this.state.city} onChange={this.handleCityChange}>
                            <option selected value="Vancouver">Vancouver</option>
                            <option value="Burnaby">Burnaby</option>
                            <option value="North Vancouver">North Vancouver</option>
                            <option value="West Vancouver">West Vancouver</option>
                            <option value="Richmond">Richmond</option>
                            <option value="Surrey">Surrey</option>
                            <option value="Langley">Langley</option>
                            <option value="Coquitlam">Coquitlam</option>
                        </select>
                    </label>
                    */}
                    <br/><br/><br/><br/>
                    <Button className="button" onClick={() => this.handleSubmit()}>SUBMIT</Button>
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
