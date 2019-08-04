import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import  StoreCards  from '../img/StoreCard.jpg';

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
  });

class StoreCard extends Component {
    render() {
        const { classes } = this.props;

        return (
          <Grid item xs={12} sm={6} >
            <Paper className={classes.paper}>
              <Grid container spacing={1} >
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={ StoreCards } />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column"  spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Standard license
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Full resolution 1920x1080 • JPEG
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          

          </Grid>
           
        );
    }
}

export default withStyles(styles)(StoreCard);