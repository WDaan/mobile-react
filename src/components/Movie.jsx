import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        const { movie } = this.props

        if (!movie) return null

        const { Plot, Genre, Title, Poster, imdbRating } = movie

        const genres = Genre.split(',').map(g =>
            <span key={g}
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                {g}
            </span>
        )

        return (
            <div className='pt-6 mb-10 pb-10 bg-gray-800'>
                <div className='max-w-sm m-10 relative rounded-lg overflow-hidden shadow-lg bg-white'>
                    <div
                        className='ml-4 right-0 mr-2 mt-2 text-xs absolute font-bold leading-sm uppercase px-2 py-1 bg-blue-100 rounded-full'
                    >{imdbRating}
                    </div>
                    <img className='w-full' src={Poster} alt={Title} />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2'>{Title}</div>
                        <p className='text-gray-700 text-base'>
                            {Plot}
                        </p>
                    </div>
                    <div className='px-6 pt-4 pb-2'>
                        {genres}
                    </div>
                </div>
            </div>
        )
    }
}