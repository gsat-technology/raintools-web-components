import React from 'react'
import UserForm from './UserForm'
import VerificationCodeForm from './VerificationCodeForm'
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

class RegisterControl extends React.Component {
  handleButtons = payload => {
    this.props.buttonClick(payload)
  }

  render() {
    return (
      <div>
        <Card>
          <div style={styles.container}>
            <CardTitle
              title="Register"
              subtitle={this.props.subtitle}
              style={styles.cardTitle}
            />
            <div style={styles.message}>
              {this.props.message ? (
                <Message
                  id="register-control-message"
                  text={this.props.message}
                />
              ) : null}
            </div>
            {this.props.showVerificationCodeForm ? (
              <VerificationCodeForm
                length={6}
                buttonLabel={'verify'}
                verifyButtonClick={code => this.handleButtons({ code: code })}
              />
            ) : (
              <UserForm
                usernameValidator={this.props.usernameValidator}
                passwordValidator={this.props.passwordValidator}
                passwordTooltip={{
                  heading: 'password requirements',
                  // subheading: 'this is sub',
                  items: [
                    'min 8 characters',
                    '1 number',
                    '1 lowercase',
                    '1 uppercase',
                    '1 special'
                  ]
                }}
                buttonClick={creds => this.handleButtons({ creds: creds })}
                buttonLabel={'register'}
              />
            )}
          </div>
        </Card>
      </div>
    )
  }
}

export default RegisterControl
