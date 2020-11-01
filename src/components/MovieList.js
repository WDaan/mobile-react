import React from 'react'
import { useRecoilValue } from 'recoil'
import SkeletonMovieList from '../skeletons/SkeletonMovieList'
import MovieListItem from './MovieListItem'

import { movies } from '../services/Store'

const MovieList = () => {

    const movieList = useRecoilValue(movies)

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