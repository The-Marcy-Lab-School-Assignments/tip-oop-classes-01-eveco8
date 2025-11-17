class Movie {
    #watched = false
    #minutesWatched = 0
    static allMovies = []
    constructor(title, rating) {
        this.title = title
        this.rating = rating

        Movie.allMovies.push(this)
    }
    watch(minutes) {
        this.#minutesWatched += 60
        console.log(`watched ${minutes} minutes`)
    }
    markWatched() {
        this.#watched = true
        console.log(`completed movie`)
    }
    isWatched() {
        return this.#watched
    }
    static getTotalMovies() {
        Movie.allMovies.length
    }
    static findByRating(rating) {
        Movie.allMovies.find(movie => movie.rating === rating)
    }
}