/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { List, ListItem, ListItemText, Menu, ListItemIcon } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    text:{
        flex : 1,
        width: '100%',
    },
    listItem:{
      backgroundColor: theme.palette.background.paper,
        width: '70%',
        textAlign:"left",
        '&:hover': {
            color: 'tomato',
        }
    }
  }));



export default function LocationAuto(props) {
    const classes = useStyles();

    const fields = useSelector(state => state.timeAndLoc);
    const dispatch = useDispatch();
    
    const loc = props.locid === '1'?'loc1':(props.locid === '2'?'loc2':'loc3');
    const address = fields[props.idx][loc];
    // const [address, setAddress] = React.useState("");

    const handleSelect = async value => {
        // setAddress(value);
        dispatch({type:'EDIT_ROW_LOC',idx:props.idx,locid:props.locid,newLoc:value,})
    };

    const renderFunc = ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <TextField className = {classes.text} {...getInputProps({ label: "Type address", size:'medium'})}/>
    
          <div style= {{position:'fixed', padding:'0', zIndex: '2', width:'23%'}}>
            {loading ? <div>...loading</div> : null}
            
            <List position = 'sticky' component='nav'>
            {suggestions.map((suggestion,index)=>{
              const primary = suggestion.description;
              return (
                <ListItem className={classes.listItem} dense = 'true'>
                <ListItemIcon><LocationOnIcon size ='small'/></ListItemIcon>
                <ListItemText {...getSuggestionItemProps(suggestion,{primary})}></ListItemText>
                </ListItem>
              )
            })}
            </List>         
          </div>
        </div>
      );

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={handleSelect}
                onSelect={handleSelect}
            >{renderFunc}
            </PlacesAutocomplete>
        </div>
    );
}