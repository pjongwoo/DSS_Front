import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import DrugCard from './DrugCard'


const styles = theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
});

class DrugAd extends Component {


  constructor(props) {
    super(props);
    this.state = {
        drugName: '',
        option:'',
        check:false,
    }
  }

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
      this.setState({
        movies
      });
  };

  //검색 API 호출
  _callApi =() => {
    const { select , drugName } = this.props
    let url = ""

    // select = 1 (ID 검색) select = 2 (약이름 검색)
    if (select ==="1"){
      url ="http://211.239.124.237:19613/drug/findId/200003479"
    }else {
      url = "http://211.239.124.237:19613/drug/findName/" + drugName
    }

    return fetch(
        url
      )
      .then(Response =>Response.json())
      .then(json => json)
      .catch(err =>console.log(err));
  }

  _renderMovies = () => {
    const { select } = this.props

    //단일 형태 
    if (select ==="1"){
      const drug =this.state.movies
      const movies =   
        <DrugCard key={drug.id}      /*약 고유 ID */
            pro_basic={drug.name}    /* 약품 구분 */
            validity={drug.validity} /* 약 유통기한 */
            company_name={drug.company_name} /*제조 회사 */
            div_name={drug.div_name} /* 약 효능 (Sample) */
            crude={drug.crude}       /*약 모양 */
            ingredient_detail={drug.ingredient_detail} /*약 성분 */
            big_image={drug.big_image} /* 약이미지 */
            usage ={drug.usage} /*약 복용법 */
            name={drug.name} /*약 이름 */
            manufacturing={drug.manufacturing} /*약효능 (Detail) */
            id={drug.id}
            check = {this.props.select}
        />
      return movies;
    }
    //Array 형태 
    else {
      const movies = this.state.movies.map((drug) => {
        return (
          <DrugCard key={drug.id}      /*약 고유 ID */
              pro_basic={drug.name}    /* 약품 구분 */
              validity={drug.validity} /* 약 유통기한 */
              company_name={drug.company_name} /*제조 회사 */
              div_name={drug.div_name} /* 약 효능 (Sample) */
              crude={drug.crude}       /*약 모양 */
              ingredient_detail={drug.ingredient_detail} /*약 성분 */
              big_image={drug.big_image} /* 약이미지 */
              usage ={drug.usage} /*약 복용법 */
              name={drug.name} /*약 이름 */
              manufacturing={drug.manufacturing} /*약효능 (Detail) */
              id={drug.id}
              />
          )
      });
      return movies;
    }
    
   }
   
    render() {
        const { classes } = this.props;
        const { movies } = this.state;
        return (
        <div>
             <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:'3%'}}>
                Search Results
              </Typography>
              <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                 {movies ? this._renderMovies() : ""}
              </Grid>
            </Container>
        </div>
        );
    }
}

export default withStyles(styles)(DrugAd);