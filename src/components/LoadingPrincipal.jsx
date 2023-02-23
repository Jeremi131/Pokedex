import React from 'react'
import './style/loadingPrincipal.css'
import imgLoading from '../../public/images/loading.gif'


const LoadingPrincipal = () => {
  return (
        <div className='loading_screen'>
            <img className='img_loading' src={imgLoading} alt="" />
            <h1 className='text_loading'>Loading...</h1>
        </div>
  )
}

export default LoadingPrincipal