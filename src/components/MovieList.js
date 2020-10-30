import React, { useState, useEffect } from 'react'
import Store from '../services/Store'
import SkeletonMovieList from '../skeletons/SkeletonMovieList'
import EventEmitter from '../services/EventEmitter'

import MovieListItem from './MovieListItem'

const MovieList = () => {

    const [movieList, setMovies] = useState(null)

    EventEmitter.subscribe('searchComplete', () => setMovies(Store.getMovies()))

    useEffect(() => {
        setMovies(Store.getMovies())
    }, [])

    return (
        <div className='pt-6 mb-10 pb-10 bg-gray-800' >
            {movieList && movieList.map(movie =>
                <MovieListItem movie={movie} key={movie.imdbID} />)
            }
            { !movieList && [1, 2, 3, 4, 5, 6, 7, 8, 9]
                .map(n => <SkeletonMovieList key={n} />)}
        </div>


    )
}

export default MovieList