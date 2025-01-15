import React from 'react'
import load from '../../assets/loader.png'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
        <img src={load}/>
      </div>
  )
}
export default Loader
