import React from 'react'
import { View } from 'react-native'
import styles from './Skeleton.css'

function SkeletonElement({ type }) {
    return (
        <View style={[styles.skeleton, styles[type]]} />
    )
}

export default SkeletonElement
