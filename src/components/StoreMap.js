/*global daum*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    roots: {
        flexGrow: 1,
        paddong:'1rme',
        width:'100%',
      },
      but_div :{
        display : 'flex',
        justifyContent : 'center',
      },
      button: {
       // margin: theme.spacing(1),
      },
   
});

class StoreMap extends Component {
    componentDidMount() {
      const vals = this.props.plase
      console.log(vals.left)
      console.log(vals.right)                                      
      let el = document.getElementById('map');
      let map = new daum.maps.Map(el, {
        center: new daum.maps.LatLng(vals.right, vals.left)
      });
      new daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(vals.right, vals.left)
      });
    }
    render() {
    const { classes } = this.props;
      return (
       
        <div className={classes.roots}>
           <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:'3%'}}>
            Search location 
        </Typography>
          <div className="map" id="map" style={ { width: '90%', height: '500px' ,margin: '0 auto' }}> >  </div>
         
          {/* <div className={classes.but_div}>
            <Button variant="contained" className={classes.button}>Default </Button>

            <Button variant="contained" className={classes.button}>Default </Button>
          </div> */}
     
     <Grid item xs={12} md={6} style={{    margin: '0 auto', marginTop:'2%'}} >
        <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button className={classes.button}>width</Button>
          <Button className={classes.button}>ButtonGroup</Button>
        </ButtonGroup>
      </Grid>
        </div>
        
      );
    }
  }
  export default withStyles(styles)(StoreMap);