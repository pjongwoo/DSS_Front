import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { withStyles } from '@material-ui/core/styles';
import DurgAd from './DrugAd'
import Select from 'react-select';

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
    }
 });

  const techCompanies = [
    { label: "약 이름", value: 1 },
    { label: "약 모양", value: 2 },
  ];
  
class DrugMain extends Component {

  render() {
        const { classes } = this.props;
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
                    <div className="col-md-3">
                    <Select options={ techCompanies } />
                    </div>
                    <FormControl aria-describedby="basic-addon1" />
                  </InputGroup>
                </div>
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
             <DurgAd/>
          </div>
   
        );
    }
}


export default withStyles(styles)(DrugMain);