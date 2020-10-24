import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Store from '../services/Store'
import SkeletonMovieList from '../skeletons/SkeletonMovieList'
import EventEmitter from '../services/EventEmitter'

const MovieList = () => {

    const [movieList, setMovies] = useState(null)

    EventEmitter.subscribe('searchComplete', () => setMovies(Store.getMovies()))

    useEffect(() => {
        setMovies(Store.getMovies())
    })

    return (
        <div className='pt-6 mb-10 pb-10 bg-gray-800' >
            {movieList && movieList.map(movie =>
                <Link to={`movie/${movie.imdbID}`} key={movie.Title} className='mx-3 py-5'>
                    <div className='flex flex-row rounded overflow-hidden shadow-lg bg-white p-4 mx-3 justify-between leading-normal'>
                        <img className='w-1/4 rounded' src={movie.Poster} alt={movie.Title} />
                        <div className='ml-4 w-3/4'>
                            <div className='text-gray-900 font-bold text-xl mb-2'>{movie.Title}</div>
                            <p className='text-gray-700 text-base'>{movie.Year}</p>
                        </div>
                    </div>
                </Link>
            )
            }

            { !movieList && [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <SkeletonMovieList key={n} />)}
        </div>


    )
}

export default MovieList