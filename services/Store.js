class Store {
    constructor() {
        this.state = {
            movies: null,
            searchTerm: ''
        }
    }

    setMovies(movies) {
        this.state.movies = movies
    }

    getMovies() {
        return this.state.movies
    }

    getSearchTerm() {
        return this.state.searchTerm
    }

    setSearchTerm(searchTerm) {
        this.state.searchTerm = searchTerm
    }
}

export default new Store()
