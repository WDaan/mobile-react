import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import MovieList from '../components/MovieList'
import EventEmitter from '../services/EventEmitter'
import Store from '../services/Store'

const Home = () => {
    const [hasSearchValue, setHasSearch] = useState(null)

    EventEmitter.subscribe('startSearch', () => setHasSearch(Store.getSearchTerm()))

    useEffect(() => {
        setHasSearch(Store.getSearchTerm())
    })

    return (
        <div className='bg-gray-800 h-full mt-0' >
            {hasSearchValue && (<MovieList />)}
            {!hasSearchValue &&
                (<div className='h-screen flex flex-col'>
                    <h2 className='text-3xl text-teal-500 align-center'>Start searching...</h2>
                </div>)}
            <Search />
        </div>
    )
}

export default Home
