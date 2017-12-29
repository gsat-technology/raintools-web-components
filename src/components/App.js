import React, { Component } from 'react'
import MapPickerDemo from './MapPickerDemo'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/map" component={MapPickerDemo} />
      </Switch>
    )
  }
}
