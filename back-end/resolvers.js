const { movies, actors, directors, users } = require("./stubs");

const resolvers = {
  Query: {
    movies: () => movies
  },

  Mutation: {
    createUser: (_, { username, password }) => ({
      token: "12345",
      user: users[0]
    }),

    loginUser: (_, { username, password }) => ({
      token: "12345",
      user: users[0]
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
