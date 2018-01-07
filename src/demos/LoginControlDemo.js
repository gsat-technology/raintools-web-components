import React from 'react'
import LoginControl from '../components/LoginControl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const validCreds = {
  username: 'existing@user.com',
  password: 'Tester1@'
}

class LoginControlDemo extends React.Component {
  state = {
    message: ''
  }

  loginClick = creds => {
    if (
      creds.username !== validCreds.username ||
      creds.password !== validCreds.password
    ) {
      this.setState({ message: 'incorrect username or password' })
    }
  }

  render() {
    return (
      <div>
        <div style={{ width: '400px', marginBottom: '30px' }}>
          <MuiThemeProvider>
            <LoginControl
              message={this.state.message}
              loginClick={creds => this.loginClick(creds)}
            />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

export default LoginControlDemo
