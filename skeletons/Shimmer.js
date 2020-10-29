import React from 'react'
import { View } from 'react-native'
import styles from './Skeleton.css'

const Shimmer = () => (
    <View styles={styles['shimmer-wrapper']}>
        <View styles={styles.shimmer} />
    </View>
)

export default Shimmer
