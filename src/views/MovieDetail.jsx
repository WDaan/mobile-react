import React, { Component } from 'react'
import OMDb from '../services/OMDb'
import { Link } from 'react-router-dom'

export default class MovieDetail extends Component {
    state = {
        movie: null,
        id: null
    }

    componentWillMount() {
        let id = this.props.match.params.id
        this.setState({ id })

    }

    componentDidMount() {
        this.fetchMovie()
    }

    fetchMovie = async () => {
        console.log(this.state)

        if (!this.state.id) return

        const res = await OMDb.fetchMovieById(this.state.id)
        console.log(res)
        this.setState({ movie: res })
    }


    render() {
        if (!this.state.movie) return null

        const { Plot, Genre, Title, Poster, imdbRating } = this.state.movie

        const genres = Genre.split(',').map(g =>
            <span key={g}
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                {g}
            </span>
        )

        return (
            <div className='pt-1 pb-0 bg-gray-800'>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12 my-1 text-green-100 ml-2">
                        <path className="text-green-100 fill-current"
                            d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z" />
                    </svg>
                </Link>
                <div className="pb-4">
                    <div className='max-w-sm m-10 mt-0 relative rounded-lg overflow-hidden shadow-lg bg-white'>
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
            </div>
        )
    }
}