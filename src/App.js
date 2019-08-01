import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DurgIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import  pc_main_ba_3  from './img/pc_main_ba_3.jpg';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Place from '@material-ui/icons/Place';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

/* SASS */
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
  // New Css Insert
  newheader :{
    paddingLeft: '70px',
  },
  grow: {
    flexGrow: 1,
  },
  Loginmargin: {
    marginRight:'7%',
    color:'#fff',
    '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.5),
    },
  },
  GridImgBox:{
    display:'flex'
  }
});


/* 정적 데이터 호출*/
const cards = [1, 2, 3];
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
     
     this.state = {
       completed: 0,
       opens : false,
     }
   }
  /* handle 함수  */
  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})

  render() {
    const { classes } = this.props;
      return (
        <div>
          <CssBaseline />
            <AppBar position="relative">
              <Toolbar className={classes.newheader}>
                <MenuIcon  className={classes.icon} onClick={this.handleDrawerToggle}/>
                <Typography variant="h5" color="inherit" noWrap>DSS</Typography>
                <div className={classes.grow} />
                <SearchIcon />
                <Button size="large" className={classes.Loginmargin}>
                  <Typography variant="subtitle1"  noWrap>Login</Typography>
                </Button>
              </Toolbar>
            </AppBar>
            {/* Drawer */}
            <Drawer
            className={classes.drawer}
            open={this.state.toggle} onClick={this.handleDrawerToggle}
            anchor="left">
            <Divider />
              <List>
                  <ListItem button key="약 검색">
                  <ListItemIcon> <DurgIcon /></ListItemIcon>
                    <b onClick={this.handleClickOpen}> 약 검색</b> 
                  </ListItem>
                  <ListItem button key="약국 검색">
                  <ListItemIcon> <Place /></ListItemIcon>
                    <b onClick={this.handleClickOpen}> 약국 검색 </b>    
                  </ListItem>
              </List>
            </Drawer>
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginBottom:'4.2%'}}>
            What drug information would you like to know about?
          </Typography>
          <Container maxWidth="sm">
  
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="선택해주세요"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">약 검색</Dropdown.Item>
                <Dropdown.Item href="#">약 이름</Dropdown.Item>
                <Dropdown.Item href="#">약 모양</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"> 
                    검색하기
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom style={{marginTop:'3%'}}>
            BEST ITEM
          </Typography>
          <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <div className={classes.GridImgBox} >
              <img src={ pc_main_ba_3 } alt="img" style={ {width:"100%"}}/>
            </div>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <MadeWithLove />
      </footer>
      {/* End footer */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
