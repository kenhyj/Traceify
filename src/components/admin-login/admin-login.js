import React from 'react';
import {connect} from "react-redux";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { login, logout } from '../../redux/actions/website-actions';

const CLIENT_ID = "319564492744-lpvaf4jeab014b5rrh21qv0ak1aab997.apps.googleusercontent.com";

const AdminLogin = props => {

    const login = (response) => {
        if(response.wc.access_token){
            props.login(response.wc.access_token, response.profileObj.name);
        }
    };

    const handleLoginFailure = () => {
        alert('Failed to log in')
    };

    const handleLogoutFailure = () => {
        alert('Failed to log out')
    };

    return (
        <div>
            { props.isLoggedIn ?
                <GoogleLogout
                    clientId={ CLIENT_ID }
                    buttonText='Logout'
                    onLogoutSuccess={ props.logout }
                    onFailure={ handleLogoutFailure }
                >
                </GoogleLogout>: <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText='Admin Login'
                    onSuccess={ login }
                    onFailure={ handleLoginFailure }
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.website.isLoggedIn
    };
};

export default connect(mapStateToProps, { login, logout })(AdminLogin);
