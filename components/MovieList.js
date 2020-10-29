import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import tailwind from 'tailwind-rn'
import Store from '../services/Store'
import SkeletonMovieList from '../skeletons/SkeletonMovieList'
import EventEmitter from '../services/EventEmitter'

const MovieList = ({ navigation }) => {
    const [movieList, setMovies] = useState(null)

    EventEmitter.subscribe('searchComplete', () => setMovies(Store.getMovies()))

    useEffect(() => {
        setMovies(Store.getMovies())
    }, [])

    return (
        <ScrollView style={tailwind('pt-6 mb-10 pb-10 bg-gray-800 overflow-hidden')}>
            {movieList && movieList.map(movie => (
                <View onClick={() => navigation.push('Details', { id: movie.imdbID })} key={movie.Title} style={tailwind('mx-3 py-5')}>
                    <View style={tailwind('flex flex-row rounded overflow-hidden bg-white p-4 mx-3 justify-between')}>
                        <Image style={tailwind('w-1/4 rounded')} source={movie.Poster} alt={movie.Title} />
                        <View style={tailwind('ml-4 w-3/4')}>
                            <Text style={tailwind('text-gray-900 font-bold text-xl mb-2')}>{movie.Title}</Text>
                            <Text style={tailwind('text-gray-700 text-base')}>{movie.Year}</Text>
                        </View>
                    </View>
                </View>
            ))}

            { !movieList && [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <SkeletonMovieList key={n} />)}
        </ScrollView>

    )
}

export default MovieList
