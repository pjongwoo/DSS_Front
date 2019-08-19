import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
class Drugdetial extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            open:nextProps.opens
        });
    }

    handleClose() {
        this.props.send(false)
        this.setState({
            open: false
        });   
     }

  render() {
        return (
            <div>
                 <Dialog onClose={this.handleClose} open={this.state.open}>
                    <DialogTitle onClose={this.handleClose}>
                      <h1> 약 세부 내용 </h1>   
                    </DialogTitle>
                    {/* <DialogContent>
                        <p>약 성분 :  {this.props.ingredient_detail} </p>
                        <p> 복용법 :  {this.props.usage} </p>
                         <p> 유효기간 : {this.props.validity} </p>
                         <p> 제조 회사 : {this.props.company_name} </p>
                       
                    </DialogContent> */}
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            <b>약 성분 : </b>  {this.props.ingredient_detail} 
                        </Typography>
                        <Typography gutterBottom>
                        <b> 복용법 : </b> {this.props.usage}
                        </Typography>
                        <Typography gutterBottom>
                        <b>  유효기간 : </b>{this.props.validity}
                        </Typography>
                        <Typography gutterBottom>
                        <b>  제조 회사 :</b> {this.props.company_name} 
                        </Typography>
                     </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
  }
}

export default Drugdetial;