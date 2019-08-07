import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { withStyles } from '@material-ui/core/styles';
import DurgAd from './DrugAd'
import  pc_main_ba_3  from '../img/pc_main_ba_3.jpg';

const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0, 6),
      
    },
   
    GridImgBox : {
      borderTop:'1px solid #e9e9e9;',
      width:'100%',
      background:'#fff',
      textAlign : 'center',
    
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    }
    
 });


class DrugMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
        drugName: '',
        select:'',
        opens:false,
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    //this.handleClickOpen = this.handleClickOpen
  }

  //Option 함수
  handleOptionChange(e) {
    this.setState({select: e.target.value});
  }
  //input 함수 
  handleValueChange(e) {
    this.setState({drugName : e.target.value}) 
  }

  handleClickOpen = (e) => {
    console.log (this.state.opens);
    this.setState({
      opens: !this.state.opens
    })
    
  }
  render() {
        const { classes } = this.props;
        const  DrugAdShow  = this.state.opens;
      
        return (
          <div>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginBottom:'4.2%'}}>
                What drug information would you like to know about?
              </Typography>
              <Container maxWidth="sm">
                <div>
                    <InputGroup className="mb-4">
                    <select name="select" value={this.state.select }onChange={this.handleOptionChange}  className="browser-default custom-select">
                      <option>Choose your option</option>
                      <option value="1">약 ID검색 </option>
                      <option value="2">약 이름 검색 </option>
                     </select>
                    {/* <div className="col-md-3">
                        <Select options={ techCompanies } />
                      </div> */}
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
                        />} 
                    </InputGroup>
                </div>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" onClick={this.handleClickOpen}> 
                      {DrugAdShow ? "재 검색하기"  : " 검색하기"}
                         
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
             {DrugAdShow ? <DurgAd select={this.state.select} drugName={this.state.drugName}/> : ""}
             <div className={classes.GridImgBox} >
                <img src={ pc_main_ba_3 } alt="img" style={ {width:"80%" , marginTop:'5%'}}/>
            </div>
          </div>
   
        );
    }
}


export default withStyles(styles)(DrugMain);