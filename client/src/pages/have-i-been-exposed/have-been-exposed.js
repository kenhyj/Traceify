/* eslint-disable */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import LocationAuto from './auto-complet';
import{AddBox,ArrowDownward,Check,ChevronLeft,ChevronRight,Clear,DeleteOutline,
Edit, FilterList,FirstPage,LastPage,Remove,SaveAlt,ViewColumn} from '@material-ui/icons';

const HaveI = () => {
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

    const[state,setState] = useState({
        columns : [
            {title: 'Date', field:'date', type:'date'},
            {title: 'Location1', field:'location1',
             editComponent : props=>(
               <LocationAuto parent = {props}/>
             )},
            {title: 'Location2', field:'location2'},
            {title: 'Location3', field:'location3'},
        ],
        data :[
            {Date: '',
            Location1: '',
            Location2: '',
            Location3: ''}
        ]
    });

    return (
        <MaterialTable
        title = 'Places you went to : '
        icons={tableIcons}
        options={{
            search: false
          }}
        columns = {state.columns}
        data = {state.data}
        editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}/>
    );
};

export default withRouter(HaveI);
