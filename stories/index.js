import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserForm from '../src/components/UserForm'
import VerificationCodeForm from '../src/components/VerificationCodeForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { usernameRe, passwordRe } from '../src/regex/index'
import MapPickerDemo from '../src/components/MapPickerDemo'

storiesOf('UserForm', module)
  .add('form w/ validation', () => (
    <MuiThemeProvider>
      <UserForm
        usernameValidator={usernameRe}
        passwordValidator={passwordRe}
        loginClick={creds => console.log(creds)}
        buttonLabel={'login'}
      />
    </MuiThemeProvider>
  ))
  .add('form w/out validation', () => (
    <MuiThemeProvider>
      <UserForm
        loginClick={creds => console.log(creds)}
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
        loginClick={creds => console.log(creds)}
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

storiesOf('MapPicker', module).add('demo', () => {
  return <MapPickerDemo />
})
