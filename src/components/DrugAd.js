import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import  pc_main_ba_3  from '../img/pc_main_ba_3.jpg';
import DrugCard from './DrugCard'


const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    
  });

class DrugAd extends Component {
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
        "http://211.239.124.237:19613/drug/findName/%ED%83%80%EC%9D%B4"
      )
      .then(Response =>Response.json())
      .then(json => json)
      .catch(err =>console.log(err));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((drug) => {
      return (
        <DrugCard key={drug.id} 
            pro_basic={drug.name} 
            validity={drug.validity}
            company_name={drug.company_name}
            div_name={drug.div_name}
            crude={drug.crude}
            ingredient_detail={drug.ingredient_detail}
            big_image={drug.big_image}
            id={drug.id}
            />
        )
    });
    return movies;
   }
   
    render() {
        const { classes } = this.props;
        const { movies } = this.state;
        return (
        <div>
             <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:'3%'}}>
                BEST ITEM
              </Typography>
              <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                 {movies ? this._renderMovies() : ""}
                <div className={classes.GridImgBox} >
                  <img src={ pc_main_ba_3 } alt="img" style={ {width:"100%"}}/>
                </div>
              </Grid>
            </Container>
        </div>
        );
    }
}

export default withStyles(styles)(DrugAd);