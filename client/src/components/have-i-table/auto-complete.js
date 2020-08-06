import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withGoogleMaps } from '../../pages/home/map/MapHOC';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    backgroundColor: theme.palette.background.paper,
    width: '280px',
    [theme.breakpoints.up('md')]: {
      width: '180px',
    },

    textAlign: 'left',
    '&:hover': {
      color: '#2196F3',
    },
  },
}));

function LocationAuto(props) {
  const classes = useStyles();
  const fields = useSelector((state) => state.timeAndLoc);
  const dispatch = useDispatch();
  const address = fields[props.idx].locations[props.locid].loc;

  const setAddress = (value) => {
    dispatch({
      type: 'EDIT_ROW_LOC',
      idx: props.idx,
      locid: parseInt(props.locid),
      newLoc: { lat: ''.lat, lng: ''.lng, loc: value },
    });
  };

  const handleSelect = async (value) => {
    setAddress(value);
    geocodeByAddress(value)
      .then((results) => {
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        dispatch({
          type: 'EDIT_ROW_LOC',
          idx: props.idx,
          locid: parseInt(props.locid),
          newLoc: { lat: latLng.lat, lng: latLng.lng, loc: value },
        });
      })
      .catch((err) => {
        dispatch({
          type: 'EDIT_ROW_LOC',
          idx: props.idx,
          locid: parseInt(props.locid),
          newLoc: { lat: ''.lat, lng: ''.lng, loc: value },
        });
      });
  };

  const renderFunc = ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
    loading,
  }) => (
    <div>
      <TextField
        className={classes.text}
        {...getInputProps({ label: 'Type address', size: 'medium' })}
      />

      <div
        style={{ position: props.pos, padding: '0', width: '23%', zIndex: '3' }}
      >
        {loading ? <div>...loading</div> : null}

        <List position='sticky' component='nav'>
          {suggestions.map((suggestion, index) => {
            const primary = suggestion.description;
            return (
              <ListItem
                className={classes.listItem}
                dense
                key={props.idx + index}
              >
                <ListItemIcon>
                  <LocationOnIcon size='small' />
                </ListItemIcon>
                <ListItemText
                  {...getSuggestionItemProps(suggestion, { primary })}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {renderFunc}
      </PlacesAutocomplete>
    </div>
  );
}

export default withGoogleMaps(LocationAuto);
