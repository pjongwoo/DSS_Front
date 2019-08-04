import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import  store  from '../img/store.jpg';
import StoreCard from './StoreCard';

const styles = theme => ({
  roots: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  GridImgBox : {
    width:'100%',
    padding:'1rem',
  },
  
});

class StoreAd extends Component {
  state ={};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
      this.setState({
        movies
      });
  };

  _callApi =() => {
    return fetch(
        "http://211.239.124.237:19613/store/address/%EC%9D%B8%EC%B2%9C/%EA%B0%95%ED%99%94%EA%B5%B0"
      )
      .then(Response =>Response.json())
      .then(json => json)
      .catch(err =>console.log(err));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((drug) => {
      return (
        <StoreCard key={drug.rnum}      /*약 고유 ID */
      
          />
        )
    });
    return movies;
   }

    render() {
        const { classes } = this.props;
        const { movies } = this.state;
        return (
            <div className={classes.roots}>
              <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:'3%'}}>
                BEST ITEM
              </Typography>
              <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={1} >
               {movies ? this._renderMovies() : ""}
                 <div className={classes.GridImgBox} >
                   <img src={ store } alt="img" style={ {width:"100%"}}/>
                 </div>
              </Grid>
              </Container>
            </div>
        );
    }
}

export default withStyles(styles)(StoreAd);