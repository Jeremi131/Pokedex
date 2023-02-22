import axios from 'axios'
import './styles/pokedex.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/Pokedex/PokeCard'
import { useNavigate } from 'react-router-dom'
import SelectTypes from '../components/Pokedex/SelectTypes'
import pokedexTittle from '../../public/images/pokedex.png'
import Pagination from '../components/Pagination'

const Pokedex = () => {

    const { nameTrainer } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()
    const [selectValue, setSelectValue] = useState('allpokemon')
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(15)

    const navigate = useNavigate()

    useEffect(() => {
        if (selectValue === 'allpokemon') {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=99999&offset=0'
            axios.get(url)
                .then(res => setPokemons(res.data))
                .catch(err => console.log(err))
        } else {
            axios.get(selectValue)
                .then(res => {
                    const results = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({ results })
                })
                .catch(err => console.log(err))
        }
    }, [selectValue])

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = pokemons?.results.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
    )

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pokemon.value = ''
    }

    return (
        <div className='pokedex_body'>
            <header className='header'>
                <div className='red_chart'></div>
                <img className='pokedex_tittle' src={pokedexTittle} alt="" />
                <div className='circle'>
                    <div className='circle_two'>
                        <div className='circle_three'>
                            <div className='circle_four'></div>
                        </div>
                    </div>
                </div>
                <div className='black_chart'></div>
            </header>
            <div className='pokedex_app'>
                <h1 className='text_welcome'><span className='name_trainer' style={{ color: '#ff3741' }}>Welcome {nameTrainer},</span> here find your favorite Pokémon</h1>
                <form onSubmit={handleSubmit} className='form_pokedex'>
                    <div className='search_pokemon'>
                        <input className='input_pokedex' id='pokemon' type="text" />
                        <button className='btn_pokedex'>Search</button>
                    </div>
                    <SelectTypes setSelectValue={setSelectValue}
                    />
                </form>

                <div className='poke_card'>
                    {currentPokemon?.map((pokemon) => (
                        <PokeCard key={pokemon.url} pokemonUrl={pokemon.url} />
                    ))}
                </div>
            </div>
            <div className='pagination'>
            <Pagination
                    pokemonPerPage={pokemonPerPage}
                    totalPokemon={pokemons?.results.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
                </div>
        </div>
    )
}

export default Pokedex