import axios from 'axios'

class OMDb {
    constructor() {
        this.token = '556d31d0'
        this.url = `http://www.omdbapi.com/?apikey=${this.token}&`
        this.axios = axios.create({
            baseURL: this.url
        })
    }

    fetchMovieByTitle(title) {
        const params = {
            t: title,
            type: 'movie'
        }

        return this.axios.get(this.url, { params })
            .then(res => res.data)
            .catch(e => console.log(e))
    }

    fetchMovieById(id) {
        if (!id) return

        const params = {
            i: id,
            type: 'movie'
        }

        return this.axios.get(this.url, { params })
            .then(res => res.data)
            .catch(e => console.log(e))
    }

    searchMovie(title) {
        if (!title) return

        const params = {
            s: title,
            type: 'movie'
        }

        return this.axios.get(this.url, {
            params
        })
            .then(res => res.data.Search)
            .catch(e => console.log(e))
    }
}

export default new OMDb()
