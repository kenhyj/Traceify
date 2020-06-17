import React from 'react';
import { Modal, Button, Grid } from "@material-ui/core";
import './thankyou.css';
import thankpng from '../../components/ThankPic.png';
import socialDis from '../../assets/social-dist.jpg';
import reopen from '../../assets/reopen.jpg';
import symptom from '../../assets/symptom.png';

class ThankPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    handleClick = () =>{
        this.setState({open:false});
    }
    render() {
        return (
            <div className='modal'>
                <Modal open={this.state.open}><div className='content'>
                    <div align="center">
                        <h1 className='thank-title'>Thank you to our <em>Essential Workers</em> and <em>You</em> for staying at home!</h1>
                        <img alt='thankyoupic' src={thankpng} className='thank-pic' style={{ width: '50%' }}></img>
                    </div>
                    <div className="page-intro">
                        <div className="intro-left">
                            <img src={socialDis} />
                            <p className="title">What we can do?</p>
                            <div>
                                <p className='intro-text'>Stay home if you can, keep social distancing and wash your hands.</p>
                            </div>
                        </div>
                        <div className="intro-middle">
                            <img src={symptom} />
                            <p className="title"> Worried about it?</p>
                            <div>
                                <p className='intro-text'>Check current situation, your symptoms using our tools.</p>
                            </div>
                        </div>
                        <div className="intro-right">
                            <img src={reopen} />
                            <p className="title">What's next</p>
                            <div>
                                <p className='intro-text'>Thanks again to essential workers and support local retailers.</p>
                            </div>
                        </div>
                    </div>
                    <Grid container justify="center">
                        <Button className='button' variant="outlined" size='small' onClick = {this.handleClick}>Enter</Button>
                    </Grid>
                </div>
                </Modal>
            </div>

        );
    }
};

export default ThankPage;
