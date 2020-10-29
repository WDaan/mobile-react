import React from 'react'
import { Text } from 'react-native'
import tailwind from 'tailwind-rn'

const Tag = ({ tag }) => (
    <Text
        style={tailwind('bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2')}
    >
        {tag}
    </Text>
)

export default Tag
