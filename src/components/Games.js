import React, { useState } from 'react'
import "./Games.css"
import data from "../data"
import ButtonDeleteGame from './ButtonDeleteGame'
import ButtonDeleteAll from './ButtonDeleteAll'
import ButtonReloadAll from './ButtonReloadAll'

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

      const deleteAllGames = () => {
        setGameList([])
      }

      const reloadAllGames = () => {
        setGameList(data)
      }

  return (
    <>
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
        <div>
          <ButtonDeleteAll deleteGames={deleteAllGames}/>
          <ButtonReloadAll reloadGames={reloadAllGames}/>
        </div>
      </>
  )
}

export default Games
