import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonMovieDetail = ({ theme }) => {
    const themeClass = theme || 'light'

    return (
        <div className='pb-8 px-1'>
            <div className={`skeleton-wrapper ${themeClass}`}>
                <div className='skeleton-poster-big'>
                    <div>
                        <SkeletonElement type='avatar' />
                    </div>
                    <div className=''>
                        <SkeletonElement type='title' />
                        <SkeletonElement type='text' />
                        <SkeletonElement type='text' />
                        <SkeletonElement type='text' />
                        <SkeletonElement type='text' />
                    </div>
                </div>
                <Shimmer />
            </div>
        </div>
    )
}

export default SkeletonMovieDetail