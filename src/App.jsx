import React, { Component } from 'react'
import OMDb from './services/OMDb'
import Header from './components/Header.jsx'
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
        this.setState({ movie: res })

    }

    render() {
        return (
            <>
                <div style={{ backgroundColor: '#4A5568' }}>
                    <Header />
                    <div>
                        <Movie movie={this.state.movie} />
                        <Search
                            startSearch={this.startSearch}
                            handleSearch={this.handleSearch}
                            searchTerm={this.state.searchTerm}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default App
