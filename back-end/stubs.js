module.exports = {
  users: [
    {
      id: 1,
      name: "Joe",
      username: "joe"
    }
  ],
  actors: [
    {
      id: 1,
      name: "Arnold Schwarzenegger",
      birthday: "1953-12-12", // not his real birthday :P
      country: "US",
      directors: [1],
      movies: [1]
    },
    {
      id: 2,
      name: "Linda Hamilton",
      birthday: "1954-05-24",
      country: "US",
      directors: [1],
      movies: [1]
    },
    {
      id: 3,
      name: "Sam Worthington",
      birthday: "1955-08-22",
      country: "US",
      directors: [1],
      movies: [2]
    }
  ],
  directors: [
    {
      id: 1,
      name: "James Cameron",
      birthday: "1953-12-12", // not his real birthday :P
      country: "US",
      moviesDirected: [1]
    }
  ],
  movies: [
    {
      id: 1,
      title: "Terminator 2",
      year: "1991",
      rating: 8.5,
      actors: [1, 2],
      directors: [1]
    },
    {
      id: 2,
      title: "Avatar",
      year: "2009",
      rating: 7.8,
      actors: [3],
      directors: [1]
    }
  ]
};
