import React from 'react';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { red } from '@material-ui/core/colors';
import Card from '../../components/card/Card-TitleDescButton';
import './symptom-disclaimer.css';

class SymptomDisclaimer extends React.Component {
  please = {
    title: 'Suggestions',
    descriptions: [
      'Currently there is no official treatment or cure for COVID-19.',
      'Meanwhile, please continue to practice social distancing and wash your hands thoroughly and regularly. Avoid large gatherings and limit outside contact to as limited to shopping groceries and essentials.',
      'If you are seeing new symptoms or pre-existing symptoms worsen in the next 2-14 days, check the symptom checker or in case of emergency contact your local health authorities.',
    ],
    severe: 'warning',
    url:
      'http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/treatments',
    id: 0,
  };

  gimme(simptoms) {
    const asymptomatic = {
      title: 'You are asymptomatic !',
      descriptions: [
        'But you may be a virus carrier.',
        'To be sure that you are virus-free, a COVID testing from a clinic is necessary',
      ],
      severe: 'success',
      url:
        'http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/symptoms',
      id: 5,
    };

    const chill = {
      title: 'You have some symptoms',
      descriptions: [
        'You are exhibiting some of the more common symptoms of someone who has the virus.',
        ' Do not be alarmed. Some of these are commonly seen in colds and flu',
      ],
      severe: 'warning',
      url:
        'http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/symptoms',
      id: 1,
    };

    const interesting = {
      title: 'You have some rarest symptoms',
      descriptions: [
        'You are exhibiting some of the rarest symptoms of someone who has the virus.',
        ' Not many individuals who have contracted COVID 19 exhibits these symptoms.',
      ],
      severe: 'warning',
      url:
        'http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/symptoms',
      id: 2,
    };

    const emergency = {
      title: 'You have some serious symptoms',
      descriptions: [
        'You are exhibiting some of the more serious symptoms exhibited by those with the COVID virus',
      ],
      severe: 'error',
      url:
        'http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/symptoms',
      id: 3,
    };

    for (const x of simptoms.serious) {
      if (simptoms.symptoms[x]) {
        return emergency;
      }
    }
    for (const y of simptoms.rare) {
      if (simptoms.symptoms[y]) {
        return interesting;
      }
    }
    for (const z of simptoms.common) {
      if (simptoms.symptoms[z]) {
        return chill;
      }
    }
    return asymptomatic;
  }

  atrisque(criteria) {
    const complications = {
      title: 'You are at risk',
      descriptions: [
        'The COVID-19 will or has put you at an elevated risk of developing health complications from either your pre-existing disorder or current disorder',
      ],
      severe: 'error',
      url:
        'http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/if-you-are-sick',
      id: 4,
    };

    for (const s of criteria.atrisk) {
      if (criteria.symptoms[s]) {
        return <Card key={complications.id} {...complications} />;
      }
    }
    return null;
  }

  render() {
    const result = this.gimme(this.props.diagnosis);
    return (
      <Dialog
        scroll='paper'
        open={this.props.diagnosis.showResult}
        onClose={this.props.close}
        className='container'
        PaperProps={{
          style: {
            minWidth: '300px',
            maxWidth: '40%',
            backgroundColor: 'aliceblue',
            padding: '2%',
          },
        }}
      >
        <DialogActions  style={{padding : '0'}} className='icon'>
          <IconButton  style={{padding : '0'}} aria-label='close' onClick={this.props.close} CancelIcon>
            <CancelIcon
              onClick={this.props.close}
              style={{ color: red[500]}}
              justify='right'
            />
          </IconButton>
        </DialogActions>
        <DialogContent className='content'>
          {this.atrisque(this.props.diagnosis)
            ? this.atrisque(this.props.diagnosis)
            : null}
          <Card key={result.id} {...result} />
          <Card key={this.please.id} {...this.please} />
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    diagnosis: state.diagnosis,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {
      dispatch({ type: 'HIDE_RESULT' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SymptomDisclaimer);
