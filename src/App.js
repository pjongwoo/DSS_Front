import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DurgIcon from '@material-ui/icons/Link';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Place from '@material-ui/icons/Place';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonAddDisabled from '@material-ui/icons/PersonAddDisabled'
import PersonAdd from '@material-ui/icons/PersonAdd'
import DrugMain from './components/DrugMain';
import Store from './components/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ModaLogin from './components/modalLogin'
import StoreParm from './components/StoreParm'
import UserLogin from './components/UserLogin'
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import Mypage from './components/UserMypage'
import { decrement } from './modules/counter';
import UserLogOut from './components/UserLogOut'
import Register from './components/auth/AddressForm'
import './App.css';


const Loginmargin = {
  color:'#fff',
}
const grow = {
  flexGrow: 1,
}
const footer={
  padding: '48px',
  backgroundColor: '#fff',
} 

const icon ={
  marginRight : '1rem',
}

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
     this.state = {
       completed: 0,
       opens : false,
       LoginState : cookies.get('LoginState'),
     }
   }
  /* handle 함수  */
  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
  handleClickOpen = () => this.setState({ opens: !this.state.opens})
  handleSendClose = (data) => {this.setState({opens : data})}
  handleLogout = () => {
    const { decrement } = this.props;
    decrement();
    alert("로그아웃 되었습니다.");
  }

  render() {
    const  Loginstates   = this.props.Loginstates;
      return (
        <Router>
          {/* App Bar */} 
          <CssBaseline />
            <AppBar position="relative">
              <Toolbar>
                <MenuIcon  style={icon} onClick={this.handleDrawerToggle}/>
                <Typography variant="h5" color="inherit" noWrap>DSS</Typography>
                <div style={grow} />
                 <SearchIcon /> 
                {/* <HelpOutline/> */}
                {/*로그인 여부 체크 */}
                {Loginstates ?
                <Button  size="large"   style={Loginmargin} >
                 <NavLink to="/Mypage" className="item" activeClassName="active">
                  <Typography variant="subtitle1" noWrap style={{color:'#fff'}}>mypage</Typography>
                 </NavLink>
                </Button>
                :
                <Button  size="large"   style={Loginmargin} >
                 <NavLink to="/Login" className="item" activeClassName="active" >
                  <Typography variant="subtitle1" noWrap style={{color:'#fff'}}>Login</Typography>
                  </NavLink>
                </Button>
                }
              </Toolbar>
            </AppBar>
            {/* Drawer */}
            <Drawer
            open={this.state.toggle} onClick={this.handleDrawerToggle}
            anchor="left">
            <Divider />
              {Loginstates ?
              <List>
                  <ListItem button key="약 검색">
                  <ListItemIcon> <DurgIcon /></ListItemIcon>
                    <NavLink to="/" className="item" activeClassName="active"> <b style={{color:'#333'}}> 약 검색 </b></NavLink>
                  </ListItem>
                  <ListItem button key="약국 검색">
                  <ListItemIcon> <Place /></ListItemIcon>
                      <NavLink to="/Store" className="item" activeClassName="active"> <b style={{color:'#333'}}>약국검색 </b> </NavLink>
                  </ListItem>
                  <ListItem button key="MyPage">
                  <ListItemIcon> <PersonAdd /></ListItemIcon>
                      <NavLink to="/Mypage" className="item" activeClassName="active"> <b style={{color:'#333'}}>MyPage </b> </NavLink>
                  </ListItem>
                  <ListItem button key="LogOut">
                  <ListItemIcon> <PersonAddDisabled /></ListItemIcon>
                      <NavLink to="/LogOut" className="item" activeClassName="active" onClick={this.handleLogout}> <b style={{color:'#333'}}>LogOut </b> </NavLink>
                  </ListItem>
              </List>
              :
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
              }
            </Drawer>
            {/*Main Content */}
             <div>
                {/* 소셜 로그인 테스트 중 <Login  /> */}  
                <ModaLogin opens={this.state.opens} send={this.handleSendClose}/>             
                {/* Route Link 생성*/}
                <Switch> 
                  <Route exact path="/" component={DrugMain}/>     {/* Main 약검색 */}
                   <Route path="/Store" component={Store}/>  {/* 약국 검색*/}   
                   <Route path="/StoreParm" component={StoreParm}/>  {/* 약국 검색*/}     
                   <Route path="/Login" component={UserLogin}/>  {/* 약국 검색*/}        
                   <Route path="/Mypage" component={Mypage}/>  {/* MyPage */}      
                   <Route path="/LogOut" component={UserLogOut}/>  {/* LogOut */}        
                   <Route path="/Register" component={Register}/>  {/* LogOut */}   
                </Switch>
            </div>
            {/* Footer */}
            <footer style={footer}>
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
// props 로 넣어줄 스토어 상태값 
// Loginstates : 로그인 상태 값 (boolean)

const mapStateToProps = state => ({
  Loginstates: state.counter.Loginstates,
});

  // props 로 넣어줄 액션 생성함수
  const mapDispatchToProps = dispatch => ({
    decrement: (data) => dispatch(decrement(data)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



