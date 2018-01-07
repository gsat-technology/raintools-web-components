import React from 'react'

const styles = {
  container: {
    backgroundColor: '#ff7979',
    color: 'white',
    padding: '10px',
    borderRadius: '10px'
  }
}

const Message = ({ text, id }) => {
  return (
    <div style={styles.container}>
      <span id={id}>{text}</span>
    </div>
  )
}

export default Message
