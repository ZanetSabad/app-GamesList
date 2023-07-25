import React, { useState } from 'react'
import "./Games.css"
import data from "../data"
import ButtonDeleteGame from './ButtonDeleteGame'

const Games = () => {
  const [gameList, setGameList ] = useState(data)
      const deleteOneGame = (idecko) => {
        const filtredGames = gameList.filter((oneGame) => {
          return(
            oneGame.id !== idecko
          )
        })
        setGameList(filtredGames)
      }
  return (
    <div className='all-movie'>
        {
          gameList.map((oneGame)=> {
              const{id, image, title, age, tags, description} = oneGame

              return(
                  <div className="one-movie" key={id}>
                      <img src={image} alt='obrazek'></img>
                      <h1>{title}</h1>
                      <p>{age}</p>
                      <p>{tags}</p>
                      <p>{description}</p>
                      <ButtonDeleteGame deleteGame={() => deleteOneGame(id)}/>
                  </div>
              )
          })
        }
      </div>
  )
}

export default Games
