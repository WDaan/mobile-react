class Store {
    constructor() {
        this.state = {
            movies: []
        }
    }

    saveMovies(movies){
        this.state.movies = movies
    }

    getMovies(){
        return this.state.movies
    }

}

export default new Store()
