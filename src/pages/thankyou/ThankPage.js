import React from 'react';
import './thankyou.css';
import thankpng from '../../components/ThankPic.png';
import socialDis from '../../assets/social-dist.jpg';
import reopen from '../../assets/reopen.jpg';
import symptom from '../../assets/symptom.png';

class ThankPage extends React.Component {
    render() {
        return (
            <div>
                <div align="center">
                    <h1 className='thank-title'>Thank you to our ESSENTIAL WORKERS and YOU for staying at home!</h1>
                    <img alt='thankyoupic' src={thankpng} className='thank-pic' style={{ width: '50%' }}></img>
                </div>
        <div className="page-intro">
            <div className="intro-left">
                <img src= {socialDis} />
                <div className = 'intro-text'>
                <p className="title">What we can do?</p>
                <p>- Stay home if you can</p>
                <p>- Keeping social distancing</p>
                <p>- Wash your hands</p>
                </div>
            </div>
            <div className="intro-middle">
                <img src= {symptom} />
                <p className="title"> Worried about it?</p>
                <div className = 'intro-text'>
                <p>- Check current situation(should link to home)</p>
                <p>- Check your symtoms</p>
                <p>- Check have you been exposed</p>
                </div>
            </div>
            <div className="intro-right">
                <img src= {reopen} />
                <p className="title">What's next</p>
                <div className = 'intro-text'>
                <p>- Thanks again to essential workers!</p>
                <p>- Support local retailers,businesses</p>
                <p>- Check reopening date here!</p>
                </div>
            </div>
         </div>
            </div>
        );
    }
};

export default ThankPage;
