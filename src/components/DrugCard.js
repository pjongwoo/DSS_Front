import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LinesEllipsis from 'react-lines-ellipsis'
import DrugDetial from './Drugdetial';
import "../css/DrugMain.css";

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
    
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },


  });

class DrugCard extends Component {
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
        const ImageUrl = "http://211.239.124.237:19609/resources/big_image/";
        /* 이미지 URL 추출*/
        const jbSplit = movies.big_image.split('/');
        const img = ImageUrl + jbSplit[6] +".jpg"
        /* NAME 추출 */
        const jbSplitName = movies.name.split('(');
        const NewName= jbSplitName[0];
      
        /*Drug Card CSS 대기중. */
        let check = this.props.check;

        return (
          <React.Fragment>
              {check ?  
                  <div>
                    <Grid className="DrugCard"  item key={movies.id} xs={12} >
                      <DrugDetial 
                        opens={this.state.opens} 
                        send={this.handleSendClose} 
                        ingredient_detail={movies.ingredient_detail} /*성분 */
                        validity={movies.validity} /*유통기한 */
                        company_name={movies.company_name} /*제조 회사 */
                        usage={movies.usage} /*약 복용법 */
                        div_name={movies.div_name}/*약 효능 */
                        big_image={movies.big_image} /*약 이미지  */
                      />
                      <Card className={classes.card}>
                        <CardMedia
                          // className={classes.cardMedia}
                          style={{paddingTop:'30.25%'}}
                          image={img}
                          title={img}
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          약 이름 : {NewName}
                        </Typography>
                        <Typography>
                          제조 회사 : {movies.company_name}
                        </Typography>
                        <LinesEllipsis
                            text={movies.manufacturing}
                              maxLine='2'
                              ellipsis='...'
                              trimRight
                              basedOn='letters'
                        />  
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary" onClick={this.handleClickOpen} >detail</Button>
                        </CardActions>
                      </Card>
                    </Grid> 
                  </div>
                  :
                  <Grid item key={movies.id}  xs={12} sm={6} md={4}>
                  <DrugDetial 
                    opens={this.state.opens} 
                    send={this.handleSendClose} 
                    ingredient_detail={movies.ingredient_detail} /*성분 */
                    validity={movies.validity} /*유통기한 */
                    company_name={movies.company_name} /*제조 회사 */
                    usage={movies.usage} /*약 복용법 */
                    div_name={movies.div_name}/*약 효능 */
                    big_image={movies.big_image} /*약 이미지  */
                  />
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={img}
                      title={img}
                    />
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                       약 이름 : {NewName}
                    </Typography>
                    <Typography>
                      제조 회사 : {movies.company_name}
                    </Typography>
                    <LinesEllipsis
                         text={movies.manufacturing}
                          maxLine='2'
                          ellipsis='...'
                          trimRight
                          basedOn='letters'
                    />  
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" onClick={this.handleClickOpen} >detail</Button>
                    </CardActions>
                  </Card>
                </Grid>  }
                 
          </React.Fragment>
          
        );
    }
}

export default withStyles(styles)(DrugCard);
