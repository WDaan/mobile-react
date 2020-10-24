import React, { useState } from 'react'
import Store from '../services/Store'
import OMDb from '../services/OMDb'
import EventEmitter from '../services/EventEmitter'

const Search = () => {

    const [searchTerm, setSearchTerm] = useState(Store.getSearchTerm())

    const handleSearchValue = e => {
        setSearchTerm(e.target.value)
        Store.setSearchTerm(e.target.value)
        EventEmitter.dispatch('updateSearch')
    }
    const enterPressed = async e => {
        if (e.keyCode == 13) {
            EventEmitter.dispatch('startSearch')
            const res = await OMDb.searchMovie(searchTerm)
            Store.setMovies(res)
            EventEmitter.dispatch('searchComplete')
        }
    }

    const startSearch = async () => {
        EventEmitter.dispatch('startSearch')
        const res = await OMDb.searchMovie(searchTerm)
        Store.setMovies(res)
        EventEmitter.dispatch('searchComplete')
    }

    return (
        <div className='fixed w-full bottom-0 flex justify-between bg-white'>
            <div className='fixed w-full bottom-0 flex justify-between bg-white'>
                <input
                    className='flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none'
                    onChange={handleSearchValue}
                    onKeyDown={enterPressed}
                    value={searchTerm}
                    placeholder='Search'
                >
                </input>
                <button className='m-2'
                    onClick={startSearch}>
                    <svg role='img' xmlns='http://www.w3.org/2000/svg'
                        width='48px' height='48px' viewBox='0 0 24 24'
                        aria-labelledby='searchIconTitle'
                        stroke='#38B2AC' strokeWidth='1'
                        strokeLinecap='square' strokeLinejoin='miter'
                        fill='none' color='#38B2AC'>
                        <title id='searchIconTitle'>Search</title>
                        <path d='M14.4121122,14.4121122 L20,20' />
                        <circle cx='10' cy='10' r='6' />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Search