class Store {
    constructor() {
        this.state = {
            movies: null
        }
    }

    setMovies(movies) {
        this.state.movies = movies
    }

    getMovies() {
        return this.state.movies
    }
}

export default new Store()
