import _$ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import jsdom from 'jsdom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
global.navigator = global.window.navigator
const $ = _$(window)

chaiJquery(chai, chai.util, $)

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  ReactTestUtils.renderIntoDocument(
    <MuiThemeProvider>
      <ComponentClass {...props} />
    </MuiThemeProvider>
  );

  return $(ReactDOM.findDOMNode(componentInstance))
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value)
  }
  ReactTestUtils.Simulate[eventName](this[0])
}

export {renderComponent, expect}
