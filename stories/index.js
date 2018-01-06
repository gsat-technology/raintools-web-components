import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserForm from '../src/components/UserForm'
import VerificationCodeForm from '../src/components/VerificationCodeForm'
import LoginControl from '../src/components/LoginControl'
import RegisterControl from '../src/components/RegisterControl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { usernameRe, passwordRe } from '../src/regex/index'
import MapPickerDemo from '../src/components/MapPickerDemo'

storiesOf('UserForm', module)
  .add('form w/ validation', () => (
    <MuiThemeProvider>
      <UserForm
        usernameValidator={usernameRe}
        passwordValidator={passwordRe}
        buttonClick={creds => console.log(creds)}
        buttonLabel={'login'}
      />
    </MuiThemeProvider>
  ))
  .add('form w/out validation', () => (
    <MuiThemeProvider>
      <UserForm
        buttonClick={creds => console.log(creds)}
        buttonLabel={'login'}
      />
    </MuiThemeProvider>
  ))
  .add('form w/ password tooltip', () => (
    <MuiThemeProvider>
      <UserForm
        usernameValidator={usernameRe}
        passwordValidator={passwordRe}
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
        buttonClick={creds => console.log(creds)}
        buttonLabel={'login'}
      />
    </MuiThemeProvider>
  ))

storiesOf('VerificationCodeForm', module).add('form', () => (
  <MuiThemeProvider>
    <VerificationCodeForm
      length={6}
      buttonLabel={'verify'}
      verifyButtonClick={code => console.log(code)}
    />
  </MuiThemeProvider>
))

storiesOf('LoginControl', module)
  .add('w/out message', () => (
    <MuiThemeProvider>
      <div style={{ width: '400px' }}>
        <LoginControl loginClick={creds => console.log(creds)} />
      </div>
    </MuiThemeProvider>
  ))
  .add('w/ message', () => (
    <MuiThemeProvider>
      <div style={{ width: '400px' }}>
        <LoginControl
          message="invalid username or password"
          loginClick={creds => console.log(creds)}
        />
      </div>
    </MuiThemeProvider>
  ))

storiesOf('RegisterControl', module)
  .add('username/password', () => (
    <MuiThemeProvider>
      <div style={{ width: '400px' }}>
        <RegisterControl
          showVerificationCodeForm={false}
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
          buttonClick={creds => console.log(creds)}
          buttonLabel={'register'}
        />
      </div>
    </MuiThemeProvider>
  ))
  .add('verification code', () => (
    <MuiThemeProvider>
      <div style={{ width: '400px' }}>
        <RegisterControl
          showVerificationCodeForm={true}
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
          buttonClick={payload => console.log(payload)}
          buttonLabel={'register'}
        />
      </div>
    </MuiThemeProvider>
  ))

storiesOf('MapPicker', module).add('demo', () => {
  return <MapPickerDemo />
})
