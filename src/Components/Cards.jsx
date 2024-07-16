import React from 'react'
import "../style/Cards.css"

const Cards = ({details}) => {
    const {name, image, position, stats} = details;
  return (
    <>
   <div className='container'>
    <div className='player_card'>
        <div className='player_image'>
            <img src={image} alt='image'/>
        </div>
        <div className='player_name'>
            <h3>{name}</h3>
        </div>
        <div className='player_position'>
            <h4>{position}</h4>
        </div>
        < div className='player_stats'>
            <div>
                <h4>Stats</h4>
            </div>
           <div className='stats'>
           <p>Points per Game : {stats.pointsPerGame}</p>
           <p>Asists per Game : {stats.assistsPerGame}</p>
           <p>Rebounds per Game : {stats.reboundsPerGame}</p>
           </div>
        <div/>
        </div>
        
    
    </div>
    
   </div>
    </>
  )
}

export default Cards
