import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  input: {
    width: '10px'
  }
}

export default class VerificationCodeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            style={styles.input}
            key="username"
            id="username"
            value="1"
            onChange={() => {}}
            onBlur={() => {}}
          />
        </div>
        <br />
        <div>
          <RaisedButton
            disabled={this.state.buttonDisabled}
            label="Login"
            primary={true}
            onClick={this.handleLoginClick}
          />
        </div>
      </div>
    )
  }
}
