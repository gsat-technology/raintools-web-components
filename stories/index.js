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
      />
    </MuiThemeProvider>
  ))
  .add('form w/out validation', () => (
    <MuiThemeProvider>
      <UserForm loginClick={creds => console.log(creds)} />
    </MuiThemeProvider>
  ))
  .add('form w/ password tooltip', () => (
    <MuiThemeProvider>
      <UserForm
        passwordTooltip={'minimum 8 characters'}
        loginClick={creds => console.log(creds)}
      />
    </MuiThemeProvider>
  ))

storiesOf('VerificationCodeForm', module).add('form', () => (
  <MuiThemeProvider>
    <VerificationCodeForm length={6} />
  </MuiThemeProvider>
))

storiesOf('MapPicker', module).add('demo', () => {
  return <MapPickerDemo />
})
