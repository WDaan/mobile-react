import React from 'react'
import { View, Text } from 'react-native'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
import styles from './Skeleton.css'
import tailwind from 'tailwind-rn'

const SkeletonMovieDetail = ({ theme }) => {
    const themeClass = theme || 'light'

    return (
        <View styles={tailwind('pb-8 px-1')}>
            <View styles={[styles.skeleton - wrapper, styles[themeClass]]}>
                <View styles={styles["skeleton-poster-big"]}>
                    <View>
                        <SkeletonElement type='avatar' />
                    </View>
                    <View>
                        <Text>
                            <SkeletonElement type='title' />
                        </Text>
                        <Text>
                            <SkeletonElement type='text' />
                            <SkeletonElement type='text' />
                            <SkeletonElement type='text' />
                            <SkeletonElement type='text' />
                        </Text>
                    </View>
                </View>
                <Shimmer />
            </View>
        </View>
    )
}

export default SkeletonMovieDetail
