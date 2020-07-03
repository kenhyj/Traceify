/* eslint-disable */
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function LocationAuto(props) {
    
    const fields = useSelector(state => state.timeAndLoc);
    const dispatch = useDispatch();
    
    const loc = props.locid === '1'?'loc1':(props.locid === '2'?'loc2':'loc3');
    const address = fields[props.idx][loc];
    // const [address, setAddress] = React.useState("");

    const handleSelect = async value => {
        // setAddress(value);
        dispatch({type:'EDIT_ROW_LOC',idx:props.idx,locid:props.locid,newLoc:value,})
    };

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={handleSelect}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({ placeholder: "Type address" })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}