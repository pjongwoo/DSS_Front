import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import  StoreCards  from '../img/StoreCard.jpg';
import { Link } from 'react-router-dom';

const styles = theme => ({

      paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: 'auto',
       
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      button: {
        margin: theme.spacing(1),
        width: '35%',
        padding: '1px',
      },
      input: {
        display: 'none',
      },
  });

class StoreCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        opens : false
      }
    }
       /* handle 함수  */
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    handleClickOpen = () => this.setState({ opens: !this.state.opens})
    handleSendClose = (data) => {
        this.setState({
           opens : data
         })
    }
    render() {
        const { classes } = this.props;
        const movies = this.props;
        const url = "/StoreParm?left="+ movies.wgs84Lon +"&right=" + movies.wgs84Lat;

        return (
   
          <Grid item xs={12} sm={6} >
            <Paper className={classes.paper}>
              <Grid container spacing={3} >
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={ StoreCards } />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column"  spacing={2}>
                    <Grid item xs>
                      <Typography   gutterBottom variant="subtitle1">
                        약국명 : {movies.dutyName}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        약국 주소 : {movies.dutyAddr}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        전화 번호 : {movies.dutyTel1 }
                      </Typography>
                    </Grid>
                    <Link to={url}>
                    <Button 
                        variant="contained" 
                        className={classes.button} 
                        style={{ cursor: 'pointer' }}  
                        > 
                        Detail 
                    </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
     
           
        );
    }
}

export default withStyles(styles)(StoreCard);