import React from 'react'
import './style/loadingPokedex.css'
import loadingTwo from '../../public/images/loadingTwo.png'


const LoadingPokedex = () => {
  return (
    <div className='loadingScreen_Two'>
        <img className='loading_pokeball' src={loadingTwo} alt="" />
        <h2 className='loading_text_pokedex'>Preparing, please wait</h2>
    </div>
  )
}

export default LoadingPokedex