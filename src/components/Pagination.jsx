import React from 'react'
import './Pokedex/styles/pagination.css'

const Pagination = ({ pokemonPerPage, totalPokemon, paginate, currentPage }) => {

    const totalPages = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        totalPages.push(i)
    }

    return (
        <nav className='nav'>
            {
                totalPages.map((number) => {
                    return (
                        <button className='btn_pagination' key={number} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    );

                })}
        </nav>
    )
}

export default Pagination