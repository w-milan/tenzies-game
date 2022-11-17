import React from 'react'

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff"
  }
  return (
    <div className='die-display'  style={styles} onClick={props.holdDice}>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  )
}

export default Die