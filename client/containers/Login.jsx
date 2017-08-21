import React, { Component } from 'react';
import {Link,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {validateUser} from '../actions/index';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      errorMsg : ''
    }
  }
  componentWillReceiveProps(nextProps) {
    let {loginFlag,errorMsg} = nextProps.loginFields;
    if(loginFlag){
      this.props.history.push('/aboutus')
    }
}
  validateUser(e){
    e.preventDefault();
    this.props.validateUser(this.state.username,this.state.password);
  }
  render(){
    return(
      <div className="container">
        <div className="well">
          <h2>Login</h2>
        <div className="form-group">
          <label className="form-label">Email</label><input type="email" className="form-control" value={this.state.username} onChange={(event) => this.setState({username : event.target.value})} />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label><input type="password" className="form-control" value={this.state.password} onChange={(event) => this.setState({password : event.target.value})}/>
        </div>
        <p className="text-danger">{this.props.loginFields.errorMsg}</p>
        <button className="btn btn-primary" onClick={event => this.validateUser(event)}>Login</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
return{
  loginFields: state.validateReducer
  }
}

export default connect(mapStateToProps,{validateUser})(Login);
