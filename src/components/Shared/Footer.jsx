import React from 'react'
import './style/footer.css'
import marca from '../../../public/images/marca.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='credits'>
                <p className='color_text'>MADE BY </p>
                <img className='marca' src={marca} alt="" />
                <p className='color_text'> ALL RIGHTS RESERVED</p>
            </div>
        </footer>

    )
}

export default Footer