import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LoginForm from '../src/components/LoginForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const usernameRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRe = /^([a-zA-Z0-9_-]){3,5}$/


storiesOf('LoginForm', module)
  .add('empty form', () => (
    <MuiThemeProvider>
      <LoginForm 
        usernameValidator={usernameRe} 
        passwordValidator={passwordRe} 
        loginClick={(creds) => console.log(creds)}
      />
    </MuiThemeProvider>
  ))
  .add('form with text', () => (
    <div>yep</div>
  ))
