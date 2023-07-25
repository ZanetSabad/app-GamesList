import React from 'react'
import "./ButtonDeleteGame.css"

const ButtonDeleteGame = (props) => {
  return (
    <div>
      <button className='one-delete-game' onClick={props.deleteGame}>Vymazat hru</button>
    </div>
  )
}

export default ButtonDeleteGame
