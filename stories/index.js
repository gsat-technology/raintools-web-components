import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserForm from '../src/components/UserForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const usernameRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//min 8 characters, 1 number, 1 lowercase, 1 uppercase, 1 special
const passwordRe = /(?=.*([0-9]{1,}))(?=.*([A-Z]{1,}))(?=.*([a-z]{1,}))(?=.*([!@#$%^&*()_+=\-`~?.]{1,}))[A-Za-z0-9!@#$%^&*()_+=\-`~?.]{8,}/g

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
  
