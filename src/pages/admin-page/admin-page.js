import React from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class AdminPage extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                ADMIN PAGE <br/><br/>
                ACCESSTOKEN: {this.props.accessToken} <br/><br/>
                USER: {this.props.user} <br/><br/>
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

