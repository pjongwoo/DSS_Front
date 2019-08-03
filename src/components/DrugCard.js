import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



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
    
    render() {
        const { classes } = this.props;
        const movies = this.props;
        const ImageUrl = "http://211.239.124.237:19609/resources/big_image/";
        const jbSplit = movies.big_image.split('/');
        const img = ImageUrl + jbSplit[6] +".jpg"
        return (
         
            
                  <Grid item key={movies.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={img}
                        title={img}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {movies.ingredient_detail}
                        </Typography>
                        <Typography>
                        {movies.company_name}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                            detail
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
              
               
        );
    }
}

export default withStyles(styles)(DrugCard);
