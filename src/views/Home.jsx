import React, { Component } from 'react'
import OMDb from '../services/OMDb'
import Search from '../components/Search.jsx'
import MovieList from '../components/MovieList.jsx'

export default class Home extends Component {
    state = {
        searchTerm: 'Harry',
        movie: null
    }

    handleSearchValue = (e) => {
        this.setState({ searchTerm: e.target.value })
    }
    enterPressed = async (e) => {
        if (e.keyCode == 13) {
            const res = await OMDb.searchMovie(this.state.searchTerm)
            this.setState({ movies: res.Search })
        }
    }

    startSearch = async (e) => {
        const res = await OMDb.searchMovie(this.state.searchTerm)
        this.setState({ movies: res.Search })

    }

    render() {
        return (
            <>
                <div className="bg-gray-800 h-full mt-0" >
                    <MovieList movies={this.state.movies} />
                    <Search
                        startSearch={this.startSearch}
                        handleSearchValue={this.handleSearchValue}
                        searchTerm={this.state.searchTerm}
                        enterPressed={this.enterPressed}
                    />
                </div>
            </>
        )
    }
}
