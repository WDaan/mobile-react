import axios from 'axios'
class OMDb {
    constructor() {
        this.token = '556d31d0'
        this.url = `http://www.omdbapi.com/?apikey=${this.token}&`
        this.axios = axios.create({
            baseURL: this.url
        })

    }

    fetchMovie(title) {
        const params = {
            t: title
        }
        const data = new URLSearchParams(params)

        return this.axios.get(this.url + `${data.toString()}}`)
            .then(res => res.data)
            .catch(e => console.log(e))

    }
}

export default new OMDb()
