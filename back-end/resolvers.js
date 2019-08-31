const { movies, actors, directors } = require("./stubs");

const resolvers = {
  Query: {
    movies: () => movies
  },

  Mutation: {
    createUser: (_, { username, password }) => ({
      token: "12345",
      user: {
        id: "1",
        name: "First user",
        birthday: "1990-12-1",
        country: "RS"
      }
    })
  },

  Movie: {
    actors: movie =>
      movie.actors.map(actorId => actors.find(({ id }) => id === actorId)),

    directors: movie =>
      movie.directors.map(directorId =>
        directors.find(({ id }) => id === directorId)
      )
  },

  Actor: {
    directors: actor =>
      directors.filter(director => actor.directors.includes(director.id)),

    movies: actor => movies.filter(({ actors }) => actors.includes(actor.id))
  },

  Director: {
    moviesDirected: director =>
      movies.filter(({ directors }) => directors.includes(director.id))
  }
};

module.exports = {
  resolvers
};
