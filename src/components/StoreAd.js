import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import StoreCard from './StoreCard';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  progress: {
    //display:'flex',
    margin: theme.spacing.unit * 2,
   
  },
});

class StoreAd extends Component {
  state ={
    completed: 0,
  };


  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
};

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
      this.setState({
        movies
      });
  };

  _callApi =() => {
    const select = this.props.select;
    const StoreName = this.props.StoreName;
    console.log("Select Value : " + select )
    console.log("StoreName Value : " + StoreName)
    return fetch(
        "http://211.239.124.237:19613/store/address/"+select+"/"+StoreName
      )
      .then(Response =>Response.json())
      .then(json => json)
      .catch(err =>console.log(err));
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((Store) => {
      return (
        <StoreCard 
            key={Store.rnum}           /*약국  고유 ID */
            dutyAddr={Store.dutyAddr}  /*약국 주소 */
            dutyName ={Store.dutyName} /*약국 이름 */
            dutyTel1 ={Store.dutyTel1} /*약국 전화번호 */
            wgs84Lon ={Store.wgs84Lon} /*X좌표 */
            wgs84Lat ={Store.wgs84Lat} /*Y좌표 */
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
                Search Results
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4} style={{display:'flex', justifyContent:'center'}}>
              {movies ? this._renderMovies() :   <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />}
            </Grid>
            </Container>
          </div>
        );
    }
}

export default withStyles(styles)(StoreAd);