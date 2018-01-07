import React from 'react'
import UserForm from './UserForm'
import Message from './Message'
import { Card, CardTitle } from 'material-ui/Card'

const styles = {
  container: {
    padding: '10px'
  },
  cardTitle: {
    marginTop: '10px',
    padding: '0px'
  },
  message: {
    marginTop: '20px',
    textAlign: 'center'
  }
}

class LoginControl extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <div style={styles.container}>
            <CardTitle title="Login" style={styles.cardTitle} />
            <div style={styles.message}>
              {this.props.message ? (
                <Message id="login-control-message" text={this.props.message} />
              ) : null}
            </div>
            <UserForm
              buttonClick={creds => this.props.loginClick(creds)}
              buttonLabel={'login'}
            />
          </div>
        </Card>
      </div>
    )
  }
}

export default LoginControl
