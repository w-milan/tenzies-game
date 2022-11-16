import React from 'react'

const Die = (props) => {
  return (
    <div class='die-display'>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  )
}

export default Die