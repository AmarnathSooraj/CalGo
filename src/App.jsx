import { useState, useEffect } from 'react'
import Home from './Components/Home/Home.jsx'
import './App.css'

function App() {
  const [heroCount,setHeroCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=> {return count===2?0:count+1})
    },3000);
  },[]);

  return (
    <Home heroCount={heroCount}/>
  )
}

export default App
