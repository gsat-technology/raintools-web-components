import React from 'react'

const styles = {
  container: {
    backgroundColor: '#ff7979',
    color: 'white',
    padding: '10px',
    borderRadius: '10px'
  }
}

const Message = ({ text }) => {
  return (
    <div style={styles.container}>
      <span>{text}</span>
    </div>
  )
}

export default Message
