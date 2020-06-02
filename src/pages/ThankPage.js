import React from 'react';
import thankpng from '../components/ThankPic.png';

class ThankPage extends React.Component {
    render() {
        return (
            <div align="center">
                This is the Thank you Page
                <br/>
                <img alt='thankyoupic' src={thankpng}></img>
            </div>
        );
    }
};

export default ThankPage;
