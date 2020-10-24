import React, { useEffect, useState } from 'react'
import OMDb from '../services/OMDb'
import { Link, useParams } from 'react-router-dom'
import SkeletonMovieDetail from '../skeletons/SkeletonMovieDetail'
import Tag from '../components/Tag'

const MovieDetail = () => {

    const [movie, setMovie] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        const fetchAndSetMovie = async () => {
            const movie = await OMDb.fetchMovieById(id)
            setMovie(movie)
        }
        fetchAndSetMovie()
    }, [])

    return (
        <div className='pt-1 pb-0 bg-gray-800'>
            <Link to='/'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-12 h-12 my-1 text-green-100 ml-2'>
                    <path className='text-green-100 fill-current'
                        d='M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z' />
                </svg>
            </Link>
            {movie && (<div className='pb-4'>
                <div className='max-w-sm mt-0 mx-4 relative rounded-lg overflow-hidden shadow-lg bg-white'>
                    <div
                        className='ml-4 right-0 mr-2 mt-2 text-xs absolute font-bold leading-sm uppercase px-2 py-1 bg-blue-100 rounded-full'
                    >{movie.imdbRating}
                    </div>
                    <img className='w-full' src={movie.Poster} alt={movie.Title} />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{movie.Title}</div>
                        <p className='text-gray-700 text-base'>
                            {movie.Plot}
                        </p>
                    </div>
                    <div className='px-6 pt-4 pb-2'>
                        {movie.Genre.split(',').map(g =>
                            <Tag key={g} tag={g} />
                        )}
                    </div>
                </div>
            </div>
            )}
            {!movie && (<SkeletonMovieDetail />)}
        </div>
    )

}

export default MovieDetail