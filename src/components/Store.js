import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { withStyles } from '@material-ui/core/styles';
import StoreAd from './StoreAd'
import  img_3  from '../img/img_2.png';
import "../css/Store.css";
import Line from './chart/line'
import Bar from './chart/bar'

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
    GridImgBox : {
      borderTop:'1px solid #e9e9e9;',
      width:'100%',
      background:'#fff',
      textAlign : 'center',
    },
    Divimg : {
      width: '50%',
      marginTop : '3%',
    },
  });


class Store extends Component {
    constructor(props) {
      super(props);
      this.state = {
        StoreName: '',
        select:'',
        opens:false,
    }
      this.handleValueChange = this.handleValueChange.bind(this)
      this.handleOptionChange = this.handleOptionChange.bind(this)
      //this.handleClickOpen = this.handleClickOpen
   }

    handleClickOpen = () => this.setState({ opens: !this.state.opens})
     //Option 함수
    handleOptionChange(e) {
      this.setState({select: e.target.value});
    }
    //input 함수 
    handleValueChange(e) {
      this.setState({StoreName : e.target.value}) 
    }

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
                      <select name="select" value={this.state.select }onChange={this.handleOptionChange}  className="browser-default custom-select col-md-3">
                      <option> option</option>
                        <option value="서울">서울 </option>
                        <option value="인천">인천 </option>
                        <option value="경기">경기 </option>
                        <option value="부산">부산 </option>
                        <option value="대구">대구 </option>
                        <option value="대전">대전 </option>
                        <option value="세종">세종 </option>
                     </select>

                     {StoreAdShow ?
                       <FormControl 
                          aria-describedby="basic-addon1" 
                          name="StoreName" 
                          value={this.state.StoreName} 
                          readOnly
                        />
                       : <FormControl
                            aria-describedby="basic-addon1" 
                            name="StoreName" 
                            value={this.state.StoreName} 
                            onChange={this.handleValueChange} 
                        />} 
              
                     </InputGroup>
                    </div>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        {StoreAdShow 
                          ?       
                           <Button variant="contained" color="secondary" onClick={this.handleClickOpen}> 재 검색하기 </Button>
                          :
                          <Button variant="contained" color="primary" onClick={this.handleClickOpen}> 검색하기 </Button>
                        }
                        </Grid>
                    </Grid>
                    </div>
                    </Container>
                </div>
                {StoreAdShow ? <StoreAd select={this.state.select} StoreName={this.state.StoreName}/> : ""}
                <div className={classes.GridImgBox} >
                   {/* <img className="Divimg" src={ img_3 } alt="img" /> */}
                        <Bar/> 
                 </div>
            </div>
        );
    }
} 


export default withStyles(styles)(Store);