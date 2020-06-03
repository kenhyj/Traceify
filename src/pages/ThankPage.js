import React from 'react';
import thankpng from '../components/ThankPic.png';

class ThankPage extends React.Component {
    render() {
        return (
            <div align="center">
                <img alt='thankyoupic' src={thankpng}></img>
            </div>
        );
    }
};

export default ThankPage;
