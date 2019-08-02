import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
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


class Store extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginBottom:'4.2%'}}>
                      You need pharmacy location information?
                    </Typography>
                    <Container maxWidth="sm">
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                             variant="outline-secondary"
                            title="선택해주세요"
                            id="input-group-dropdown-1">
                            <Dropdown.Item eventKey="1">약 검색</Dropdown.Item>
                            <Dropdown.Item eventKey="2">약 이름</Dropdown.Item>
                            <Dropdown.Item eventKey="3">약 모양</Dropdown.Item>
                            </DropdownButton>
                            <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>
              
                    <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary"> 
                            Search
                        </Button>
                        </Grid>
                    </Grid>
                    </div>
                    </Container>
                </div>
                <StoreAd/>
            </div>
        );
    }
}


export default withStyles(styles)(Store);