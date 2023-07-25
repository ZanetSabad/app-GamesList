import React from 'react'
import "./Games.css"
import data from "../data"
import ButtonDeleteGame from './ButtonDeleteGame'

const Games = () => {
  return (
      <div className='all-movie'>
        {
          data.map((oneGame)=> {
              const{id, image, title, age, tags, description} = oneGame

              return(
                  <div className="one-movie" key={id}>
                      <img src={image} alt='obrazek'></img>
                      <h1>{title}</h1>
                      <p>{age}</p>
                      <p>{tags}</p>
                      <p>{description}</p>
                      <ButtonDeleteGame/>
                  </div>
              )
          })
        }
      </div>
  )
}

export default Games
