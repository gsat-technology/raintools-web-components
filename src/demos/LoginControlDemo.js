import React from 'react'
import LoginControl from '../components/LoginControl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const validCreds = {
  username: 'existing@user.com',
  password: 'Tester1@'
}

const styles = {
  success: {
    color: 'green'
  },
  failed: {
    color: 'red'
  }
}

class LoginControlDemo extends React.Component {
  state = {
    message: '',
    status: ''
  }

  loginClick = creds => {
    let status = 'failed'
    if (
      creds.username === validCreds.username &&
      creds.password === validCreds.password
    ) {
      status = 'success'
    }
    this.setState({ status })
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
        result:{' '}
        <span
          style={
            this.state.status === 'success' ? styles.success : styles.failed
          }
        >
          {this.state.status}
        </span>
      </div>
    )
  }
}

export default LoginControlDemo
