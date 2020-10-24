import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonMovieList = ({ theme }) => {
    const themeClass = theme || 'light'

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className='skeleton-poster-small'>
                <div>
                    <SkeletonElement type='avatar' />
                </div>
                <div>
                    <SkeletonElement type='title' />
                    <SkeletonElement type='text' />
                </div>
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonMovieList