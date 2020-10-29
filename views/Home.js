import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

import EventEmitter from '../services/EventEmitter'
import Store from '../services/Store'

import Search from '../components/Search'
import MovieList from '../components/MovieList'

function Home({ navigation }) {
    const [hasSearchValue, setHasSearch] = useState(null)

    EventEmitter.subscribe('startSearch', () => setHasSearch(Store.getSearchTerm()))

    useEffect(() => {
        setHasSearch(Store.getSearchTerm())
    }, [])

    return (
        <View style={{ flex: 1 }} style={tailwind('bg-gray-800 h-full mt-0 relative')}>
            {hasSearchValue && (<MovieList navigation={navigation} />)}
            {!hasSearchValue
                && (
                    <View style={tailwind('flex text-center mt-48')}>
                        <Text style={tailwind('text-3xl text-gray-400')}>Start searching!</Text>
                    </View>
                )}
            <Search />
        </View>
    )
}

export default Home
