import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { withStyles } from '@material-ui/core/styles';
import DurgAd from './DrugAd';
import "../css/DrugMain.css";
import { Slide } from 'react-slideshow-image';
import Box from '@material-ui/core/Box';

 const slideImages = [
   'http://www.fujifilm.co.kr/event/photobook/2018/20180222_event/images/img_2.png',
   'http://www.fujifilm.co.kr/event/photobook/2018/20180222_event/images/img_3.png',
 ];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,

}

const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0, 6),
    },
    GridImgBox : {
      display:'flex',
      flexDirection: 'column',
      borderTop:'1px solid #e9e9e9;',
      width:'100%',
      background:'#fff',
      alignItems: 'center',
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
 
 });


class DrugMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
        drugName: '',
        select:'',
        opens:false,
        focus:false,
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleValueFocus =this.handleValueFocus.bind(this)
    this.handleValueFocusOut = this.handleValueFocusOut.bind(this)
  }

  //Option 함수
  handleOptionChange(e) {
    this.setState({select: e.target.value});
  }
  //input 함수 
  handleValueChange(e) {
    this.setState({drugName : e.target.value}) 
  }
  //Click 함수
  handleClickOpen = (e) => {
    console.log (this.state.opens);
    this.setState({
      opens: !this.state.opens,
      focus : false
    })  
  }
  handleValueFocus = (e) => {
    this.setState({
      focus : true
    })
  }
  handleValueFocusOut = (e) =>{
  
    this.setState({
      focus : false
    })
  }

  render() {
        const { classes } = this.props;
        const  DrugAdShow  = this.state.opens;
        const FocusShow = this.state.focus;
        return (
          <div style={{position:'relative'}}>
            {FocusShow ? <div className="dimmed"> </div> : ''}
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <div className="title"  align="center" color="textPrimary" gutterBottom >
                <strong style={{position:'relative',color:'#3f51b5'}}> 약의 종류 , 약의 복용법에  </strong> 
                <br></br><o style={{position:'relative', top:'10px' }}>대해 알고 싶으신가요? </o>
              </div>
              <Container maxWidth="sm" style={{position:'relative',zIndex:'20'}}>
                <div >
                    <InputGroup className="mb-4">
                      {DrugAdShow ?
                        <select name="select" value={this.state.select }onChange={this.handleOptionChange}  className="browser-default custom-select col-md-4" style={{    background: '#e9e9e9'}}> 
                          <option> option</option>
                          <option disabled="readOnly" value="1">약 ID검색 </option>
                          <option disabled="readOnly" value="2">약 이름 검색 </option>
                        </select> 
                        : 
                        <select name="select" value={this.state.select }onChange={this.handleOptionChange}  className="browser-default custom-select col-md-4"> 
                          <option> option</option>
                          <option  value="1">약 ID검색 </option>
                          <option  value="2">약 이름 검색 </option>
                        </select>
                      }
                      {DrugAdShow ?
                       <FormControl 
                          aria-describedby="basic-addon1" 
                          name="drugName" 
                          value={this.state.drugName} 
                          readOnly
                        />
                       : <FormControl
                            aria-describedby="basic-addon1" 
                            name="drugName" 
                            value={this.state.drugName} 
                            onChange={this.handleValueChange} 
                            onFocus={this.handleValueFocus}
                            onBlur={this.handleValueFocusOut}
                        />} 
                         <Grid item style={{marginLeft:'2%'}}>
                          {DrugAdShow ? 
                            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}> 재 검색하기 </Button>
                            : 
                            <Button variant="contained" color="primary" onClick={this.handleClickOpen}> 검색하기 </Button>
                          }
                        </Grid>
                    </InputGroup>
                    {/* <div className={classes.heroButtons}>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          {DrugAdShow ? 
                            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}> 재 검색하기 </Button>
                            : 
                            <Button variant="contained" color="primary" onClick={this.handleClickOpen}> 검색하기 </Button>
                          }
                        </Grid>
                      </Grid>
                   </div> */}
                </div>
                {FocusShow ?
                <Grid container>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={4}
                    style={{ width: '100%', height: '8rem' }}
                  >
                  <p style={{borderBottom:'1px solid #adb5bd', paddingBottom:'2%'}}> <b>인기검색</b> </p>
                  <span style={{color:'#343a40' ,display:'block'}}> 비타민 </span>
                  <span style={{color:'#343a40' ,display:'block'}}> 수면제 </span>
                </Box>
                </Grid>
                : ""}
              </Container>
            </div>
             {DrugAdShow ? <DurgAd select={this.state.select} drugName={this.state.drugName}/> : ""}

            {DrugAdShow ? "" :

            <div className={classes.GridImgBox} >
               {/* <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom className="tip">
                 DSS가 알려주는 건강 <b>Tip </b> 
              </Typography>  */}
              <h3 className="tip"> DSS가 알려주는 건강 <b>Tip </b>  </h3> 
              <div className="slide-container">
                  <Slide {...properties}>
                    <div className="each-slide">
                      <div className="image-container">
                        <img className="Divimgs" src={slideImages[0]} />
                      </div>
                    </div>
                    <div className="each-slide">
                      <div className="image-container">
                        <img className="Divimgs" src={slideImages[1]}/>
                      </div>
                    </div>
                  </Slide>
              </div>
            </div>
            }
        </div>
          
   
        );
    }
}


export default withStyles(styles)(DrugMain);