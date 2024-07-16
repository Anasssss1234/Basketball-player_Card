import React from 'react'
import Cards from './Components/Cards'
import player from './Components/BasketballPlayer'
const App = () => {
  return (
    <div>
    {
      player.map((details)=>{
        return (
          <>
          <Cards details={details}/>
          </>
        )
      })
    }
    </div>
  )
}

export default App
