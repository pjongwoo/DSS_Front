import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class UserLogOut extends Component {
    render() {
        const { Loginstates } = this.props;
        
        console.log("LogOut : Loginstates : " + Loginstates);
        return (
            <div>
                { Loginstates ? "" : <Redirect to="/"/> }
            </div>
        );
    }
}

 // props 로 넣어줄 스토어 상태값
 // Loginstates : 로그인 상태 값 (boolean)
 const mapStateToProps = state => ({
    Loginstates: state.counter.Loginstates,
  });
  


export default connect(
    mapStateToProps
)(UserLogOut);
