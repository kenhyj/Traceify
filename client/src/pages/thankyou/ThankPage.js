import React from 'react';
import { Modal, Button, Grid, Container, makeStyles, Hidden } from "@material-ui/core";
import './thankyou.css';
import thankpng from '../../assets/ThankPic.png';
import socialDis from '../../assets/social-dist.jpg';
import reopen from '../../assets/reopen.jpg';
import symptom from '../../assets/symptom.png';
import './thankyou.css';

const modalStye = makeStyles((theme)=> ({
    content: {
        backgroundColor : 'aliceblue',
        padding: '20px',
        marginTop: '150px',
        maxWidth : '300px',
        [theme.breakpoints.up('md')]:{
            maxWidth : '700px',
            marginTop: '3%',
        },
        
    }
}));


const ThankPage = ()=> {
    const [open, setOpen] = React.useState(true);
    const classes = modalStye();
    return (
        <div className='modal'>
            <Modal open={open}>
            <Container className={classes.content}>
                <div align="center">
                    <h1 className='thank-title'>Thank you to our <em>Essential Workers</em> and <em>You</em> for staying at home!</h1>
                    <img alt='thankyoupic' src={thankpng} className='thank-pic' style={{ width: '250px', padding:'10px' }}></img>
                </div>
                <Hidden smDown>
                <div className="page-intro">
                    <div className="intro-left">
                        <img src={socialDis} alt="social distance" />
                        <p className="title">What we can do?</p>
                        <div>
                            <p className='intro-text'>Stay home if you can, keep social distancing and wash your hands.</p>
                        </div>
                    </div>
                    <div className="intro-middle">
                        <img src={symptom}  alt="symptom" />
                        <p className="title"> Worried about it?</p>
                        <div>
                            <p className='intro-text'>Check current situation, your symptoms using our tools.</p>
                        </div>
                    </div>
                    <div className="intro-right">
                        <img src={reopen}  alt="reopen" />
                        <p className="title">What's next</p>
                        <div>
                            <p className='intro-text'>Thanks again to essential workers and support local retailers.</p>
                        </div>
                    </div>
                </div>
                </Hidden>
                <Grid container justify="center">
                    <Button color="primary" className='buttonz' variant="outlined" size='small' onClick={()=>setOpen(false)}>Enter</Button>
                </Grid>
            </Container>
            </Modal>
        </div>

    );
};
 
export default ThankPage;