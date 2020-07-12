import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './reopening.css';
import React, { useState } from 'react';
import PageHeading from '../../components/page-heading/PageHeading';
import { motion } from 'framer-motion';
import { variants, transitions, pageStyle } from '../motion-settings';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function renderProvince(obj) {
  if (Object.keys(obj).length !== 0) {
    const current_phase = obj.current_stage - 1;
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.5em',
            backgroundColor: 'rgb(135, 151, 170)',
          }}
        >
          {obj.province} is currently in Stage {obj.current_stage}
          <br />
        </h1>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 'em',
          }}
        >
          You are looking at details of Stage {obj.current_stage}
        </h2>
        <Table id='provtable'>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>
                Detail and Restriction for Stage {current_phase}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableDataMUI(obj.phases[current_phase].restrictions)}
          </TableBody>
        </Table>
        <b>
          Additional information is located{' '}
          <a href={obj.more} target='_blank'>
            here.
          </a>
        </b>
      </div>
    );
  }
  return <div>Utnapishtim</div>;
}

function renderProvinceTwo(obj, chosenphase) {
  if (Object.keys(obj).length !== 0) {
    if (chosenphase === 1000) {
      return renderProvince(obj);
    }
    const clicked_phase = chosenphase - 1;
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '1.5em',
            backgroundColor: 'rgb(135, 151, 170)',
          }}
        >
          {obj.province} is currently in Stage {obj.current_stage}
        </h1>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 'em',
          }}
        >
          You are looking at details of Stage {chosenphase}
        </h2>
        <Table id='provtable'>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell>
                Detail and Restriction for Stage {chosenphase}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTableDataMUI(obj.phases[clicked_phase].restrictions)}
          </TableBody>
        </Table>
      </div>
    );
  }
  return <div>Utnapishtim</div>;
}

function renderTableDataMUI(restrictions) {
  const list = Object.entries(restrictions);
  return list.map((mesage) => {
    for (const x of mesage) {
      return (
        <TableRow>
          <TableCell>
            {x.replace(/_/gi, ' ').replace(/\n/g, '<br />')}
          </TableCell>
          <TableCell>{mesage[1]}</TableCell>
        </TableRow>
      );
    }
  });
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const provterr = [
  { abbr: 'AB', province: 'Alberta' },
  { abbr: 'BC', province: 'British Columbia' },
  { abbr: 'MB', province: 'Manitoba' },
  { abbr: 'NB', province: 'New Brunswick' },
  { abbr: 'NL', province: 'Newfoundland' },
  { abbr: 'NT', province: 'Northwest Territories' },
  { abbr: 'NS', province: 'Nova Scotia' },
  { abbr: 'NU', province: 'Nunavut' },
  { abbr: 'ON', province: 'Ontario' },
  { abbr: 'PE', province: 'Prince Edward Island' },
  { abbr: 'QC', province: 'Quebec' },
  { abbr: 'SK', province: 'Saskatchewan' },
  { abbr: 'YT', province: 'Yukon' },
];
const dropprovmenu = provterr.map((list) => {
  return <MenuItem value={list.abbr}>{list.province}</MenuItem>;
});

const phasesmenu = (region) => {
  const retphase = [];
  if (Object.keys(region).length > 0) {
    for (const x of region.phases) {
      retphase.push(x.phase);
    }
  }
  return retphase;
};

function dropphasemenu(region) {
  if (Object.keys(region).length > 0) {
    return phasesmenu(region)
      .sort()
      .map((service) => {
        return <MenuItem value={service}>{service}</MenuItem>;
      });
  }
  return <MenuItem />;
}

const heading = 'Reopening Dates';
const subheading = <p></p>;
const body = (
  <>
    <b>Disclaimer</b>
    <br />
    Each province and territory have several phases or stages that consist of
    unique policies.
    <br />
    As the COVID-19 cases improves, the province/territory will transition into
    the next phase.
    <br />
    eg. 1 goes to 2 and 2 goes to 3, etc.
    <br />
    However, if the COVID-19 cases worsens, it is possible to regress to a
    previous phase.
    <br />
    eg. 2 reverts to 1.
    <br />
    Each of these phases are flexible to change according to the COVID-19
    climate. Only the Canadian province British Columbia has been updated.
    <br />
    If there is a service you do not see, try checking the previous stages.
    <br />
    There are additional information listed at the button of the table.
    <br />
    Please call the specific store location of interest to enquire about
    operating hours. Their hours may have adjusted. They could be closed for
    safety.
  </>
);
const pageHeadingData = { heading, subheading, body };

function Reopen() {
  const [prov, setProvince] = useState({});
  const [phase, setPhase] = useState(1000);
  const classes = useStyles();
  const axiosgetreopenlist = (target) => {
    axios
      .get('http://localhost:7000/reopenings/getprovince/'.concat(target))
      .then((res) => {
        setPhase(res.data[0].current_stage);
        setProvince(res.data[0]);
      })
      .catch((err) => {
        console.log('failed to get desired reopen detail. Error: ', err);
      });
  };
  const handleProvinceChange = (event) => {
    axiosgetreopenlist(event.target.value);
  };
  const handlePhaseChange = (event) => {
    setPhase(event.target.value);
  };
  const droprender = (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='province-select-label'>Prov/Terr</InputLabel>
        <Select
          labelId='province-select-label'
          id='service-select-label'
          onChange={handleProvinceChange}
        >
          {dropprovmenu}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='service-select-label'>Phases/Stages</InputLabel>
        <Select
          labelId='phases-select-label'
          id='phases-select-label'
          onChange={handlePhaseChange}
          defaultValue={phase}
        >
          {dropphasemenu(prov)}
        </Select>
      </FormControl>
      {renderProvinceTwo(prov, phase)}
    </div>
  );
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={variants}
      transition={transitions}
      style={pageStyle}
    >
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <div>
        {droprender}
        <br />
      </div>
    </motion.div>
  );
}

export default withRouter(Reopen);
