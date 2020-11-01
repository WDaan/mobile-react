import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { searchTerm, movies, hasSearchValue } from '../services/Store'

import OMDb from '../services/OMDb'

const Search = () => {

    const [search, setSearch] = useRecoilState(searchTerm)
    let setMovies = useSetRecoilState(movies)
    let setHasSearchValue = useSetRecoilState(hasSearchValue)

    const startSearch = async e => {
        //check if search came from enter
        if (e.keyCode && e.keyCode !== 13) return

        //check if searchterm exists and has a value
        if (!search) return setHasSearchValue(false)
        
        setHasSearchValue(true)
        setMovies(await OMDb.searchMovie(search))
    }

    return (
        <div className='fixed w-full bottom-0 flex justify-between bg-white'>
            <div className='fixed w-full bottom-0 flex justify-between bg-white'>
                <input
                    className='flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none outline-none'
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={startSearch}
                    value={search}
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