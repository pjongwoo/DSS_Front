import React, { Component } from 'react';
import ReactModalLogin from "react-modal-login";
class modalLogin extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          showModal: false,
          loading: false,
          error: null
        };
      }

    componentWillReceiveProps(nextProps){
        this.setState({
            showModal:nextProps.opens
        });
     }

    openModal() {
        this.setState({
          showModal: true
        });
    }
     
    closeModal() {
        this.props.send(false)
        this.setState({
          showModal: false,
          error: null
        });
      }
     
    onLoginSuccess(method, response) {
        console.log("logged successfully with " + method);
    }
     
    onLoginFail(method, response) {
        console.log("logging failed with " + method);
        this.setState({
          error: response
        });
    }
     
    startLoading() {
        this.setState({
          loading: true
        });
    }
     
    finishLoading() {
        this.setState({
          loading: false
        });
    }
     
    afterTabsChange() {
        this.setState({
          error: null
        });
    }

    render() {
        return (
            <div>
                 <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    loading={this.state.loading}
                    error={this.state.error}
                    tabs={{
                        afterChange: this.afterTabsChange.bind(this)
                    }}
                    loginError={{
                        label: "Couldn't sign in, please try again."
                     }}
                     registerError={{
                        label: "Couldn't sign up, please try again."
                    }}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}
                    providers={{
                        facebook: {
                          config:'' ,
                          onLoginSuccess: '',
                          onLoginFail: '',
                          label: "Facebook Login"
                        },
                        google: {
                          config:'' ,
                          onLoginSuccess: '',
                          onLoginFail: '',
                          label: "Google Login"
                        }
                      }}
                    />
            </div>
        );
    }
}

export default modalLogin;