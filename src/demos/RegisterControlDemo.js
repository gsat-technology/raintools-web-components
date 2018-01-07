import React from 'react'
import RegisterControl from '../components/RegisterControl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { usernameRe, passwordRe } from '../regex/index'

const existingUser = 'already@registered.com'
const validCode = '333333'

class RegisterControlDemo extends React.Component {
  state = {
    message: '',
    showVerificationCodeForm: false,
    subtitle: ''
  }

  buttonClick = payload => {
    if (
      payload.hasOwnProperty('creds') &&
      payload.creds.username === existingUser
    ) {
      this.setState({
        message: 'a user with this email address is already registered'
      })
    } else if (payload.hasOwnProperty('creds')) {
      this.setState({
        showVerificationCodeForm: true,
        subtitle: 'check email for verification code'
      })
    }

    if (payload.hasOwnProperty('code') && payload.code !== validCode) {
      this.setState({ message: 'invalid code' })
    }
  }

  render() {
    return (
      <div>
        <div style={{ width: '400px', marginBottom: '30px' }}>
          <MuiThemeProvider>
            <RegisterControl
              subtitle={this.state.subtitle}
              message={this.state.message}
              showVerificationCodeForm={this.state.showVerificationCodeForm}
              usernameValidator={usernameRe}
              passwordValidator={passwordRe}
              passwordTooltip={{
                heading: 'password requirements',
                items: [
                  'min 8 characters',
                  '1 number',
                  '1 lowercase',
                  '1 uppercase',
                  '1 special'
                ]
              }}
              buttonClick={payload => this.buttonClick(payload)}
              buttonLabel={'register'}
            />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

export default RegisterControlDemo
