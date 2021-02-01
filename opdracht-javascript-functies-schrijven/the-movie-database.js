let favoriteMovie = {
  title: 'My amazing movie',
  duration: 150,
  stars: ['Super actor', 'Great Guy', 'Amazing women']
}

let movieInformation = function(movie) {
  return  movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars + ".";
}

console.log(movieInformation(favoriteMovie));