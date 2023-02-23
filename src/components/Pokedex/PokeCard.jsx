import axios from 'axios'
import '../Pokedex/styles/pokeCard.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pokeball from '../../../public/images/pokeball.png'

const PokeCard = ({ pokemonUrl }) => {

    const [poke, setPoke] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPoke(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick= () => {
        navigate(`/pokedex/${poke.id}`)
    }

    const colorBorder = {
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
    const pokeBorder = poke?.types[0].type.name


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


        
    return (
        <article className='poke_info border' style={{borderColor: `${colorBorder[pokeBorder]}`}} onClick={handleClick}>
            <header className={`header_card bg-${poke?.types[0].type.name}`}>
                <img className='poke_sprite' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <h2 className='poke_name' style={{color: `${colorText[pokeText]}`}} >{poke?.name}</h2>
            <ul className='poke_type'>
                {
                    poke?.types.map(type => (
                        <li key={type.type.name}>{type.type.name} </li>
                    ))
                }
            </ul>
            <span className='type_text'>Type</span>
            <hr />
            <img className='pokeball' src={pokeball} alt="" />
            <ul className='poke_stats'>
                {
                    poke?.stats.map(stat => (
                        <li  className='stats_info'  key={stat.stat.url}>
                            <span className='stats_name'>{stat.stat.name}</span>
                            <span className='base_stats' style={{color: `${colorText[pokeText]}`}}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default PokeCard