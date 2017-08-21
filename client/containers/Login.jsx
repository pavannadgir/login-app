import React, { Component } from 'react';
import {Link,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {validateUser} from '../actions/index';

class Login extends Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    let {loginFlag,errorMsg} = nextProps.loginFields;
    if(loginFlag){
      this.props.history.push('/aboutus')
    }
}
  validateUser(e){
    e.preventDefault();
    this.props.validateUser(this.refs.email.value,this.refs.password.value);
  }
  render(){
    return(
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2>Login</h2>
            <div className="form-group">
              <label className="form-label">Email</label><input type="email" ref="email" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label><input type="password" ref="password" className="form-control" />
            </div>
            <p className="text-danger">{this.props.loginFields.errorMsg}</p>
            <button className="btn btn-primary" onClick={event => this.validateUser(event)}>Login</button>
          </div>
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
