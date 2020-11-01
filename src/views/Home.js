import React from 'react'
import { useRecoilValue } from 'recoil'
import Search from '../components/Search'
import MovieList from '../components/MovieList'

import { hasSearchValue } from '../services/Store'

const Home = () => {
    const hasSearch = useRecoilValue(hasSearchValue)

    return (
        <div className='bg-gray-800 h-full mt-0' >
            {hasSearch && (<MovieList />)}
            {!hasSearch &&
                (<div className='h-screen flex h-screen'>
                    <h2 className='text-3xl text-gray-400 m-auto'>Start searching!</h2>
                </div>)}
            <Search />
        </div>
    )
}

export default Home
