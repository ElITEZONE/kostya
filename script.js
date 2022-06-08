let numberOfFilms = prompt('Сколько фильмов вы посмотрели? ')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('Один из последних просмотренных вами фильмом'),
    b = prompt('Ваша оценка к этому фильму'),
    c = prompt('Один из последних просмотренных вами фильмом'),
    d = prompt('Ваша оценка к этому фильму');


personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d


console.log(personalMovieDB)