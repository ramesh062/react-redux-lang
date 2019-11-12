import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../Containers/LoginContainer/action';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {

    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form name="loginForm" className="col-md-12" onSubmit={this.onSubmit}>
            <div className="form-group-collection">
              <div className="form-group">
                <label className="label">Email:</label>
                <input type="email" className="form-control" name="email" onChange={e => this.setState({ email: e.target.value })} />
              </div>

              <div className="form-group">
              <label className="label">Password:</label>
                <input type="password" className="form-control" name="password" onChange={e => this.setState({ password: e.target.value })} />
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-info" />
            </div>
            <div className="message">
              {isLoginPending && <div className="alert alert-info">Please wait...</div>}
              {isLoginSuccess && <div className="alert alert-success">Success.</div>}
              {loginError && <div className="alert alert-danger">{loginError.message}</div>}
            </div>
          </form>
        </div>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {

  return {
    isLoginPending: state.loginFormReducer.isLoginPending,
    isLoginSuccess: state.loginFormReducer.isLoginSuccess,
    loginError: state.loginFormReducer.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);