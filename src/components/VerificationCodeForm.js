import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  input: {
    width: '20px',
    marginRight: '20px',
    fontSize: '30px'
  }
}

export default class VerificationCodeForm extends Component {
  constructor(props) {
    super(props)
    this.state = { inputs: Array(props.length).fill(''), buttonDisabled: true }
  }

  focusNameElement(id) {
    this.refs[id].focus()
  }

  focusButton() {
    this.refs['button'].focus()
  }

  createCodeField = (id, value) => {
    return (
      <TextField
        style={styles.input}
        key={id}
        id={id.toString()}
        value={value}
        onChange={event => {
          this.setState({
            ...this.state,
            inputs: this.state.inputs.map((_, num) => {
              if (id === num) {
                if ('0123456789'.indexOf(event.target.value) !== -1) {
                  if (num !== this.state.inputs.length - 1) {
                    this.focusNameElement(id + 1)
                  }
                  return event.target.value
                } else {
                  return this.state.inputs[num]
                }
              } else return this.state.inputs[num]
            }),
            buttonDisabled:
              this.state.inputs.join('').length + 1 < this.state.inputs.length
          })
        }}
        ref={id}
      />
    )
  }

  render() {
    return (
      <div>
        {this.state.inputs.map((_, index) =>
          this.createCodeField(index, this.state.inputs[index])
        )}
        <br />
        <RaisedButton
          disabled={this.state.buttonDisabled}
          label={this.props.buttonLabel}
          primary={true}
          onClick={() =>
            this.props.verifyButtonClick(this.state.inputs.join(''))
          }
        />
      </div>
    )
  }
}
