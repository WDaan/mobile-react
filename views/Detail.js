import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'tailwind-rn'
import { Ionicons } from '@expo/vector-icons'

import OMDb from '../services/OMDb'
import SkeletonMovieDetail from '../skeletons/SkeletonMovieDetail'
import Tag from '../components/Tag'

const Detail = ({ route, navigation }) => {
    const [movie, setMovie] = useState(null)
    const { id } = route.params

    useEffect(() => {
        const fetchAndSetMovie = async () => {
            const movie = await OMDb.fetchMovieById(id)
            setMovie(movie)
        }
        fetchAndSetMovie()
    }, [id])

    return (
        <View style={tailwind('pt-5 bg-gray-800 relative  h-full')}>
            <View style={{ position: 'fixed', zIndex: 99, marginLeft: '1em' }}>
                <Ionicons style={tailwind('ml-2')} size={48} color='#F7FAFC' name='ios-arrow-round-back' onClick={() => navigation.goBack()} />
            </View>
            {movie && (
                <View style={tailwind('pb-4 bg-gray-800')}>
                    <View style={{ margin: '0 auto' }} style={tailwind('pb-4 max-w-sm mt-0 mx-4 relative rounded-lg overflow-hidden bg-white')}>
                        <Text
                            style={tailwind('ml-4 right-0 mr-2 mt-2 text-xs absolute font-bold uppercase px-2 py-1 bg-blue-100 rounded-full')}
                        >
                            {movie.imdbRating}
                        </Text>
                        <Image style={tailwind('w-full')} source={movie.Poster} alt={movie.Title} />
                        <View style={tailwind('px-4 py-4')}>
                            <Text style={tailwind('font-bold text-xl mb-2')}>{movie.Title}</Text>
                            <Text style={tailwind('text-gray-700 text-base')}>
                                {movie.Plot}
                            </Text>
                        </View>
                        <View style={tailwind('px-6 pt-4 pb-2 flex flex-row flex-wrap')}>
                            {movie.Genre.split(',').map(g => <Tag key={g} tag={g} />)}
                        </View>
                    </View>
                </View>
            )}
            {!movie && (<SkeletonMovieDetail />)}
        </View>
    )
}

export default Detail
