import React from 'react'
import "./ButtonReloadAll.css"

const ButtonReloadAll = (props) => {
  return (
    <div>
      <button className="button-reload" onClick={props.reloadGames}>Vrátit vše</button>
    </div>
  )
}

export default ButtonReloadAll
