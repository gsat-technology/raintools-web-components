import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserForm from '../src/components/UserForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { usernameRe, passwordRe } from '../src/regex/index'

storiesOf('UserForm', module)
  .add('form w/ validation', () => (
    <MuiThemeProvider>
      <UserForm 
        usernameValidator={usernameRe} 
        passwordValidator={passwordRe} 
        loginClick={(creds) => console.log(creds)}
      />
    </MuiThemeProvider>
  ))
  .add('form w/out validation', () => (
    <MuiThemeProvider>
      <UserForm 
        loginClick={(creds) => console.log(creds)}
      />
    </MuiThemeProvider>
  ))
  .add('form w/ password tooltip', () => (
    <MuiThemeProvider>
      <UserForm 
        passwordTooltip={"minimum 8 characters"}
        loginClick={(creds) => console.log(creds)}
      />
    </MuiThemeProvider>
  ))
  
