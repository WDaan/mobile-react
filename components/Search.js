import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import tailwind from 'tailwind-rn'

import { FontAwesome } from '@expo/vector-icons'
import Store from '../services/Store'
import OMDb from '../services/OMDb'
import EventEmitter from '../services/EventEmitter'

function Search() {
    const [searchTerm, setSearchTerm] = useState(Store.getSearchTerm())

    const handleSearchValue = e => {
        setSearchTerm(e.target.value)
        Store.setSearchTerm(e.target.value)
        EventEmitter.dispatch('updateSearch')
    }
    const enterPressed = async e => {
        if (e.keyCode === 13) {
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
        <View style={{ bottom: 0, width: '100%' }}>
            <View style={tailwind('w-full flex justify-between bg-white')}>
                <View style={tailwind('bottom-0 flex flex-row justify-between bg-white')}>
                    <View style={{ width: '88%' }}>
                        <TextInput
                            onChange={handleSearchValue}
                            onKeyPress={enterPressed}
                            value={searchTerm}
                            style={tailwind('m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200')}
                        />
                    </View>
                    <View style={{ width: '12%' }}>
                        <FontAwesome.Button style={tailwind('flex')} onClick={startSearch} size={32} name='search' color='#38B2AC' backgroundColor={null} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Search
