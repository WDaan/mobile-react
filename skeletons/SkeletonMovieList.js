import React from 'react'
import { View, Text } from 'react-native'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonMovieList = ({ theme }) => {
    const themeClass = theme || 'light'

    return (
        <View className={`skeleton-wrapper ${themeClass}`}>
            <View className='skeleton-poster-small'>
                <View>
                    <SkeletonElement type='avatar' />
                </View>
                <View>
                    <Text>
                        <SkeletonElement type='title' />
                    </Text>
                    <Text>
                        <SkeletonElement type='text' />
                    </Text>
                </View>
            </View>
            <Shimmer />
        </View>
    )
}

export default SkeletonMovieList
