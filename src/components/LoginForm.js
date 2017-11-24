import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class LoginForm extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: {
        value: '',
        error: '',
        touched: false
      },
      password: {
        value: '',
        error: '',
        touched: false
      },
      buttonDisabled: true
    }
  }

  handleUsernameOnBlur = () => {
  
    return this.setState({
      username: {
        ...this.state.username,
        touched: true
      }
    })
  }

  handlePasswordOnBlur = () => {
    
      return this.setState({
        username: {
          ...this.state.password,
          touched: true
        }
      })
    }

  handlePasswordChange = (event) => {

    return this.setState({
      password: {
        ...this.state.password,
        value: event.target.value,
        error: event.target.value.match(this.props.passwordValidator) == null ? 'invalid' : ''
      }
    })
  }

  handleUsernameChange = (event) => {

    return this.setState({
      username: {
        ...this.state.username,
        value: event.target.value,
        error: event.target.value.match(this.props.usernameValidator) == null ? 'invalid' : ''
      },
      buttonDisabled: this.state.username.error === '' && this.state.password.error === '' ? false : true
    })
  }

  handleLoginClick = () => {
    const creds = {
      username: this.state.username.value,
      password: this.state.password.value
    }

    this.props.loginClick(creds)
  }

  render() {

    const styles = {
      container: {
        display: 'inline-flex',
        alignItems: 'center'
      },
      textField: {
        margin: '0px 20px 0px 0px'
      },
      button: {
        margin: '0px 20px 0px 0px'
      }
    }

    return (
      <div style={styles.container}>
        <div>
          <TextField
            style={styles.textField}
            key='username'
            id='username'
            hintText="you@examle.com"
            floatingLabelText="Username"
            value={this.state.username.value}
            onChange={this.handleUsernameChange}
            errorText={this.state.username.touched ? this.state.username.error : ''}
            onBlur={this.handleUsernameOnBlur}
          />
          <TextField
            style={styles.textField}
            key='password'
            id='password'
            hintText=""
            floatingLabelText="Password"
            value={this.state.password.value}
            onChange={this.handlePasswordChange}
            errorText={this.state.password.error}
          />
        </div>
        <div style={styles.button}>
          <RaisedButton disabled={this.state.buttonDisabled} label="Login" primary={true} onClick={this.handleLoginClick} />
        </div>
      </div>
    )
  }
}
