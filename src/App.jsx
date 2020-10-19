import React, { Component } from 'react'
import OMDb from './services/OMDb'
import Search from './components/Search.jsx'
import Movie from './components/Movie.jsx'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'Harry',
            movie: null
        }
    }


    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    startSearch = async (e) => {
        const res = await OMDb.fetchMovie(this.state.searchTerm)
        console.log(res)
        this.setState({ movie: res })

    }

    render() {
        return (
            <>
                <div className="bg-gray-800 h-full mt-0" >
                    <Movie movie={this.state.movie} />
                    <Search
                        startSearch={this.startSearch}
                        handleSearch={this.handleSearch}
                        searchTerm={this.state.searchTerm}
                    />
                </div>
            </>
        )
    }
}

export default App
