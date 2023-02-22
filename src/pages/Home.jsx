import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import pokedexTittle from '../../public/images/pokedex.png'
import { useNavigate } from 'react-router-dom'
import './styles/home.css'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

    return (
        <div className='home_app'>
            <header className='home_header'>
            <div className='red_chart_home'></div>
                <div className='circle_home'>
                    <div className='circle_two_home'>
                        <div className='circle_three_home'>
                            <div className='circle_four_home'></div>
                        </div>
                    </div>
                </div>
                <div className='black_chart_home'></div>
            </header>

            <div className='home_info'>
                <img className='img_pokedex' src={pokedexTittle} alt="" />
                <h2 className='first_tittle'>¡Hi Trainer!</h2>
                <p className='second_tittle'>Give me your name, to start</p>
                <form className='form_home' onSubmit={handleSubmit}>
                    <input className='input_home' id='name' placeholder='Your name' type="text" />
                    <button className='btn_home'>Start</button>
                </form>
            </div>


            <footer className='footer_home'>
                <div className='red_chart_home'></div>
                <div className='circle_home_footer'></div>
                <div className='black_chart_home'></div>
            </footer>
        </div>
    )
}

export default Home