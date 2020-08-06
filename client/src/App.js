import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/home';
import Header from './components/header/header';
import ThankPage from './pages/thankyou/ThankPage';
import SymptomChecker from './pages/symptom-checker/symptom-checker';
import QnA from './pages/q&a/qna';
import HaveI from './pages/have-i-been-exposed/have-been-exposed';
import Reopen from './pages/reopening-date/reopening-date';
import { login, logout } from './redux/actions/website-actions';
import AdminPage from './pages/admin-page/admin-page';

function App(props) {
  if (sessionStorage.getItem('token') !== null) {
    const token = JSON.parse(sessionStorage.getItem('token'));
    props.login(token.token, token.user);
  }

  return (
    <Router>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          top: '0',
          height: '100px',
          zIndex: '1',
        }}
      >
        <Header title='Covid 19 - Traceify' style={{ overflowY: 'scroll' }} />
      </div>
      <ThankPage />
      <div className='App-main'>
        <AnimatePresence exitBeforeEnter>
          <Route
            key='/'
            exact
            path='/'
            render={() => <Redirect to='/home' />}
          />
          <Route key='/home' path='/home' component={Home} />
          <Route key='/haveI' path='/have-i-been-exposed' component={HaveI} />
          <Route key='/qna' path='/qna' component={QnA} />
          <Route
            key='/symptom'
            path='/symptom-checker'
            component={SymptomChecker}
          />
          <Route key='/reopen' path='/reopen' component={Reopen} />
          {props.isLoggedIn ? (
            <Route path='/admin' component={AdminPage} />
          ) : (
            <Route path='/admin' render={() => <Redirect to='/home' />} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.website.isLoggedIn,
  };
};

export default connect(mapStateToProps, { login, logout })(App);
