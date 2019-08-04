import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DurgIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Place from '@material-ui/icons/Place';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DrugMain from './components/DrugMain';
import Store from './components/Store';
import test from './components/test';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ModaLogin from './components/modalLogin'

/* SASS */
const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
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
  },
  NavLink: {
    color:'#333',
    fontweight: 'bold',
    textdecoration:'none',
  }
});

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
  handleClickOpen = () => this.setState({ opens: !this.state.opens})
  handleSendClose = (data) => {
    this.setState({
      opens : data
    })
  }

  render() {
    const { classes } = this.props;
      return (
        <Router>
          {/* App Bar */} 
          <CssBaseline />
            <AppBar position="relative">
              <Toolbar className={classes.newheader}>
                <MenuIcon  className={classes.icon} onClick={this.handleDrawerToggle}/>
                <Typography variant="h5" color="inherit" noWrap>DSS</Typography>
                <div className={classes.grow} />
                <SearchIcon />
                <Button size="large" className={classes.Loginmargin} onClick={this.handleClickOpen} >
                  <Typography variant="subtitle1" noWrap>Login</Typography>
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
                    <NavLink to="/" className="item" activeClassName="active"> <b style={{color:'#333'}}> 약 검색 </b></NavLink>
                  </ListItem>
                  <ListItem button key="약국 검색">
                  <ListItemIcon> <Place /></ListItemIcon>
                      <NavLink to="/Store" className="item" activeClassName="active"> <b style={{color:'#333'}}>약국검색 </b> </NavLink>
                  </ListItem>
              </List>
            </Drawer>
            
            {/*Main Content */}
             <div>
                {/*<Login  /> */}  
                <ModaLogin opens={this.state.opens} send={this.handleSendClose}/>             
                {/* Route Link 생성*/}
                <Switch> 
                  <Route exact path="/" component={DrugMain}/>     {/* Main 약검색 */}
                   <Route path="/Store" component={Store}/>  {/* 약국 검색*/}          
                </Switch>
            </div>

            {/* Footer */}
            <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                COPYRIGHT(C) 2019 DSS. ALL RIGHTS RESERVED.
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                11, Gimpohangang 9-ro, Gimpo-si, Gyeonggi-do, Republic of Korea TEL : 02-123-1234  E-MAIL : help@Dss.com
              </Typography>
        
            </footer>
            {/* End footer */}
          </Router>
      
    );
  }
}

export default withStyles(styles)(App);