import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import StoreAd from './StoreAd'

const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0, 6),
      
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    // New Css Insert
    newheader :{
      paddingLeft: '70px',
    },
    grow: {
      flexGrow: 1,
    },
    Loginmargin: {
      marginRight:'7%',
      color:'#fff',
      '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.5),
      },
    },
    GridImgBox:{
      display:'flex',
      width: '90%',
      margin: '0 auto',

    }
  });

  const techCompanies = [
    { label: "서울", value: 1 },
    { label: "인천", value: 2 },
    { label: "경기", value: 3 },
    { label: "부산", value: 4 },
    { label: "대구", value: 5 },
    { label: "대전", value: 6 },
    { label: "세종", value: 7 },
  ];
class Store extends Component {
    state ={
      opens:false,
    };
    handleClickOpen = () => this.setState({ opens: !this.state.opens})
    render() {
        const { classes } = this.props;
        const  StoreAdShow  = this.state.opens
        return (
            <div>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginBottom:'4.2%'}}>
                      You need pharmacy location information?
                    </Typography>
                    <Container maxWidth="sm">
                    <div>
                      <InputGroup className="mb-4">
                    <div className="col-md-3">
                      <Select options={ techCompanies } />
                    </div>
                    <FormControl aria-describedby="basic-addon1" />
                     </InputGroup>
                    </div>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen}> 
                            Search
                        </Button>
                        </Grid>
                    </Grid>
                    </div>
                    </Container>
                </div>
                {StoreAdShow ? <StoreAd/> : ""}
             
            </div>
        );
    }
}


export default withStyles(styles)(Store);