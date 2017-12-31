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
    this.state = { inputs: Array(props.length).fill('') }
  }

  focusNameInputField() {
    this.refs.nameInputField.focus()
  }

  createCodeField = (id, value) => {
    return (
      <TextField
        style={styles.input}
        key={id}
        id={id}
        value={value}
        onChange={event => {
          this.setState({ ...this.state, id: event.target.value })
          this.focusNameInputField()
        }}
        ref={id}
      />
    )
  }

  render() {
    return (
      <div>
        <RaisedButton
          disabled={this.state.buttonDisabled}
          label="Login"
          primary={true}
          onClick={this.handleLoginClick}
        />{' '}
      </div>
    )
  }
}
