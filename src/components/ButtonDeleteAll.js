import React from 'react'
import "./ButtonDeleteAll.css"

const ButtonDeleteAll = (props) => {
  return (
    <div>
      <button className="button-delete-all" onClick={props.deleteGames}>Vymazat vše</button>
    </div>
  )
}


export default ButtonDeleteAll
