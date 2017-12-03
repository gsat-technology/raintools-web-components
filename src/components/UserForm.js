import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import InfoIcon from 'material-ui/svg-icons/action/info'
import { blue500 } from 'material-ui/styles/colors';


export default class UserForm extends Component {
  
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
      buttonDisabled: this.props.passwordValidator || this.props.usernameValidator ? true : false 
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
        password: {
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
        error: this.props.passwordValidator !== undefined && event.target.value.match(this.props.passwordValidator) == null ? 'invalid' : ''
      },
      buttonDisabled: this.state.username.error === '' && this.state.password.error === '' ? false : true
    })
  }

  handleUsernameChange = (event) => {

    return this.setState({
      username: {
        ...this.state.username,
        value: event.target.value,
        error: this.props.usernameValidator !== undefined && event.target.value.match(this.props.usernameValidator) == null ? 'invalid' : ''
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


    const errorMessage = obj => obj.touched && obj.error.length > 0 ? obj.error : ""

    return (
      <div>
        <div>
          <TextField
            key='username'
            id='username'
            hintText="you@examle.com"
            floatingLabelText="Username"
            value={this.state.username.value}
            onChange={this.handleUsernameChange}
            errorText={this.state.username.touched ? this.state.username.error : ''}
            onBlur={this.handleUsernameOnBlur}
          /><br />
          <TextField
            key='password'
            id='password'
            hintText=""
            floatingLabelText="Password"
            value={this.state.password.value}
            onChange={this.handlePasswordChange}
            errorText={errorMessage(this.state.password)}
            onBlur={this.handlePasswordOnBlur}
          />
          { this.props.passwordTooltip ? <PasswordTooltip /> : <div />}
        </div>
        <br />
        <div>
          <RaisedButton 
            disabled={this.state.buttonDisabled}
            label="Login"
            primary={true}
            onClick={this.handleLoginClick} 
          />
        </div>
      </div>
    )
  }
}

const PasswordTooltip = (text) => {

  const handleMouseEnter = () => {
    //todo
  }

  return (
    <InfoIcon onMouseEnter={handleMouseEnter} style={{marginRight: 24}} color={blue500} />
  )
}
