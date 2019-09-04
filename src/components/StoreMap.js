/*global daum*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Storeevaluation from './Storeevaluation'


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
    constructor(props) {
      super(props);
      this.state = {
        open : false,
      }
    }
    componentDidMount() {
      const vals = this.props.plase
      console.log(vals);
                                   
      let el = document.getElementById('map');
      let map = new daum.maps.Map(el, {
        center: new daum.maps.LatLng(vals.right, vals.left)
      });
      let marker = new daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(vals.right, vals.left),
        clickable: true 
      });

      
    
      const iwContent = ' <div style="width: 100%; margin: auto 0;"> <div style="padding:25px;">  <b>   ' + vals.dutyName +
      ' </b>  </br>  ' + vals.dutyTel1 + '</div> </div>',
        iwRemoveable = true; 

     
        const infowindow = new daum.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
        });

        infowindow.open(map, marker); 
        daum.maps.event.addListener(marker, 'click', function() {
           infowindow.open(map, marker);  
        });
    }

    evaluation = () =>{
      alert("평가하기");
    }

    makingPhoneCalls = () =>{
      alert("전화하기");
    }

    handleClickOpen = () => this.setState({ open: !this.state.open})
    handleSendClose = (data) => {this.setState({open : data})}

    render() {
    const { classes } = this.props;
      return (
       
        <div className={classes.roots}>
           <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:'3%'}}>
              Search location 
           </Typography>
        
          <div className="map" id="map" style={ { width: '90%', height: '500px' ,margin: '0 auto' }}>   </div>
           
         <Grid item xs={12} md={6} style={{    margin: '0 auto', marginTop:'2%'}} >
             <ButtonGroup fullWidth aria-label="full width outlined button group">
              <Button className={classes.button} >   <Storeevaluation /> </Button>
              <Button className={classes.button} onClick={this.makingPhoneCalls}>전화하기</Button>
            </ButtonGroup> 
        {/* <MyApp/> */}
        </Grid>
       </div>
      );
    }
  }
  export default withStyles(styles)(StoreMap);