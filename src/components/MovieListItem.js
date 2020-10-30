import React from 'react'
import { Link } from 'react-router-dom'

const MovieListItem = ({ movie }) => {

    return (
        <>
            { movie && (<Link to={`movie/${movie.imdbID}`} className='mx-3 py-5'>
                <div className='flex flex-row rounded overflow-hidden shadow-lg bg-white p-4 mx-3 justify-between leading-normal'>
                    <img className='w-1/4 rounded' src={movie.Poster} alt={movie.Title} />
                    <div className='ml-4 w-3/4'>
                        <div className='text-gray-900 font-bold text-xl mb-2'>{movie.Title}</div>
                        <p className='text-gray-700 text-base'>{movie.Year}</p>
                    </div>
                </div>
            </Link>)
            }
        </>)
}

export default MovieListItem