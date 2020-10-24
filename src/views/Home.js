import React from 'react'
import Search from '../components/Search'
import MovieList from '../components/MovieList'

const Home = () => {
    return (
        <div className='bg-gray-800 h-full mt-0' >
            <MovieList />
            <Search />
        </div>
    )

}

export default Home
