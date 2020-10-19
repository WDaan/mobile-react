import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieList extends Component {

    render() {
        if (!this.props.movies) return (<div className='pt-6 mb-10 pb-10 bg-gray-800' style={{ height: '94vh' }}></div>)

        const movies = this.props.movies.map(movie =>
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

        return (
            <div className='pt-6 mb-10 pb-10 bg-gray-800'>
                { movies}
            </div>
        )
    }
}

