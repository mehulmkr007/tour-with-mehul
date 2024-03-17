import { useState } from 'react'
import './App.css'
import data from './assets/componets/Data'
import Tours from './assets/componets/Tours'

function App() {

  const [tours,setTours] = useState(data)

  function removeTour(id){
      const newTours = tours.filter(tour => tour.id !== id)
      setTours(newTours)
  }


  function refresh(){
    setTours(data)
  }
  if(tours.length === 0){
    return (
      <div className='refresh-mode'>
        <h1>No Tours Left</h1>
        <button className='refresh-btn' onClick={refresh}>Refresh</button>
      </div>
    )
  }
  return (
     <div>
       <Tours tours = {tours} removeTour = {removeTour}/>
     </div>
  )
}

export default App
