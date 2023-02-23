import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles/pokeInfo.css'
import pokedexTittle from '../../public/images/pokedex.png'
import LoadingPokedex from '../components/LoadingPokedex'
import pokeballError from '../../public/images/pokeballError.png'


const PokeInfo = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [poke, setPoke] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    const colorType = {
        grass: "#4fe63e",
        fire: "#E35825",
        water: "#1479FB",
        bug: "#8cb039",
        normal: "#BC6B7C",
        electric: "#d2e00c",
        fairy: "#C23867",
        ground: "#895C1A",
        rock: "#8d7045",
        flying: "#56A4AE",
        psychic: "#e24dc2",
        dark: "#0D1211",
        ghost: "#454AA8",
        dragon: "#2B319B",
        ice: "#64CBF5",
        fighting: "#F1613C",
        steel: "#728881",
        poison: "#A564E3"
    }
    const pokeType = poke?.types[0].type.name

    const colorText = {
        grass: "#3d7549",
        fire: "#E75C35",
        water: "#1479FB",
        bug: "#4AB648",
        normal: "#735259",
        electric: "#e4e730",
        fairy: "#971B45 ",
        ground: "#654008",
        rock: "#5f472c",
        flying: "#478A93",
        psychic: "#a5398e",
        dark: "#030706",
        ghost: "#323569",
        dragon: "#0C1395",
        ice: "#6FBEDF",
        fighting: "#96402A",
        steel: "#5E736C",
        poison: "#5B3184"
    }
    const pokeText = poke?.types[0].type.name

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(url)
            .then(res => {
                setPoke(res.data)
                setHasError(false)
            })
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => setIsLoading(false), 2000)
            })
    }, [id])


    const handleClick = () => {
        navigate(-1)
    }


    if (hasError) {
        return <div className='hasError'>
                                    <i onClick={handleClick} className='bx box_back bxs-left-arrow-circle bx-tada'></i>
            <div className='error'>
                <h1 className='text_error'>4</h1>
                <img className='pokeballError' src={pokeballError} alt="" />
                <h1 className='text_error'>4</h1>
            </div>
            <h1 className='text_one'>¡Oh-Oh!</h1>
            <h1 className='text_two'>The Pokemon with name "{id}" not found</h1>
        </div>
    } else {
        return (
            isLoading ?
                <LoadingPokedex />
                :
                <div className='info_container'>
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
                    <div className='info_pokemon'>
                        <i onClick={handleClick} className='bx box_back bxs-left-arrow-circle bx-tada'></i>
                        <div className='card_info'>
                            <header className={`header_info bg-${poke?.types[0].type.name}`}>
                                <img className='sprite_pokemon' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
                            </header>

                            <h1 className='number_pokemon' style={{ color: `${colorText[pokeText]}` }}>{poke?.id}</h1>
                            <div className='container_name'>
                                <hr />
                                <h1 className='name_pokemon' style={{ color: `${colorText[pokeText]}` }}>{poke?.name}</h1>
                                <hr />
                            </div>
                            <div className='height_weight_container'>
                                <p className='weight_height'><span>Weight</span>{poke?.weight}</p>
                                <p className='weight_height'><span>height</span>{poke?.height}</p>
                            </div>
                            <div className='info_type_habilities'>

                                <div className='type_container'>
                                    <div className='box_tittle'>
                                        <p>Type</p>
                                    </div>
                                    <ul className='type_pokemon'>
                                        {
                                            poke?.types.map(type => (
                                                <li className='type' style={{ backgroundColor: `${colorType[pokeType]}` }} key={type.type.name}>{type.type.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>


                                <div className='ability_container'>
                                    <div className='box_tittle'>
                                        <p>Ability</p>
                                    </div>
                                    <ul className='ability_pokemon'>
                                        {
                                            poke?.abilities.map(ability => (
                                                <li className='ability' key={ability.ability.name}>{ability.ability.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>


                            </div>
                            <ul className='info_stats' >
                                <div className='container_tittle'>
                                    <h2 className='tittle_stats'>Stats</h2>
                                    <hr />
                                </div>

                                {
                                    poke?.stats.map(stat => (
                                        <li className='stats_container' key={stat.stat.url}>
                                            <div className='text_stats'>
                                                <span >{stat.stat.name}</span>
                                                <span >{stat.base_stat}</span>
                                            </div>
                                            <div
                                                style={{
                                                    background: `linear-gradient(90deg, #c9ff5a 0, #a4ff2a ${stat.base_stat}%, rgb(231, 231, 231) ${stat.base_stat}% 100%)`,
                                                }}
                                                className="bar_stats"
                                            ></div>

                                        </li>
                                    ))
                                }
                            </ul>

                        </div>

                        <div className='move_info'>
                            <div className='container_tittle'>
                                <h1 className='move_tittle'>Movements</h1>
                                <hr />
                            </div>
                            <ul className='moveSet'>
                                {
                                    poke?.moves.map(move => (
                                        <li className='movement' key={move.move.name}>{move.move.name}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>

        )
    }
}

export default PokeInfo