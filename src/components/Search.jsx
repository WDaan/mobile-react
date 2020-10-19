import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className='fixed w-full bottom-0 flex justify-between bg-white'>
                <div className='fixed w-full bottom-0 flex justify-between bg-white'>
                    <textarea id='messageInput'
                        className='flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none'
                        rows='1'
                        onChange={this.props.handleSearch}
                        value={this.props.value}
                        placeholder='Search'
                    >
                    </textarea>
                    <button className='m-2'
                        onClick={this.props.startSearch}>
                        <svg role='img' xmlns='http://www.w3.org/2000/svg'
                            width='48px' height='48px' viewBox='0 0 24 24'
                            aria-labelledby='searchIconTitle'
                            stroke='#38B2AC' strokeWidth='1' s
                            trokeLinecap='square' strokeLinejoin='miter'
                            fill='none' color='#38B2AC'>
                            <title id='searchIconTitle'>Search</title>
                            <path d='M14.4121122,14.4121122 L20,20' />
                            <circle cx='10' cy='10' r='6' />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}