import React, { Component } from 'react'
import MapPickerDemo from '../demos/MapPickerDemo'
import { Switch, Route } from 'react-router-dom'
import LoginControlDemo from '../demos/LoginControlDemo'
import RegisterControlDemo from '../demos/RegisterControlDemo'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/map" component={MapPickerDemo} />
        <Route exact path="/logincontrol" component={LoginControlDemo} />
        <Route exact path="/registercontrol" component={RegisterControlDemo} />
      </Switch>
    )
  }
}
