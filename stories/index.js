import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserForm from '../src/components/UserForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { usernameRe, passwordRe } from '../src/regex/index'
import MapPickerContainer from '../src/components/MapPickerContainer'

const mapItems = [
  {
    west: 139.18,
    east: 150.41,
    north: -33.6,
    south: -42.17
  },
  {
    west: 142.03,
    east: 148.48,
    north: -35.24,
    south: -39.59
  },
  {
    west: 143.31,
    east: 146.23,
    north: -36.33,
    south: -38.5
  }
]

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

storiesOf('MapPicker', module).add('map', () => {
  const rectangleOptions = {
    default: {
      strokeColor: '#ccc',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#efefef',
      fillOpacity: 0.35
    },
    highlight: {
      strokeColor: '#666',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#efefef',
      fillOpacity: 0.35
    }
  }

  return (
    <MapPickerContainer
      rectangleOptions={rectangleOptions}
      mapItemsSelected={itemIndexes => console.log(itemIndexes)}
      mapItems={mapItems}
    />
  )
})
