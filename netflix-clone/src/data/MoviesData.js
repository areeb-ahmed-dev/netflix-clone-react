const movies = [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": [
        "Drama"
      ],
      "rating": 9.3,
      "director": "Frank Darabont",
      "actors": [
        "Tim Robbins",
        "Morgan Freeman"
      ],
      "plot": "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      "poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSf1DK32xKMQzqSl8wnY1BLVu_gdwsRYzVSNM6A03r6c-fEwrif8raKzkFRuerw1KHdDICvOw",
      "trailer": "https://example.com/shawshank_redemption_trailer.mp4",
      "runtime": 142,
      "awards": "Nominated for 7 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$28.3 million",
      "production": "Columbia Pictures",
      "website": "http://www.warnerbros.com/movies/shawshank-redemption"
    },
    {
      "id": 2,
      "title": "The Godfather",
      "year": 1972,
      "genre": [
        "Crime",
        "Drama"
      ],
      "rating": 9.2,
      "director": "Francis Ford Coppola",
      "actors": [
        "Marlon Brando",
        "Al Pacino",
        "James Caan"
      ],
      "plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "poster": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ",
      "trailer": "https://example.com/the_godfather_trailer.mp4",
      "runtime": 175,
      "awards": "Won 3 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$245.1 million",
      "production": "Paramount Pictures",
      "website": "https://www.paramountmovies.com/movies/the-godfather"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "genre": [
        "Action",
        "Crime",
        "Drama"
      ],
      "rating": 9,
      "director": "Christopher Nolan",
      "actors": [
        "Christian Bale",
        "Heath Ledger",
        "Gary Oldman"
      ],
      "plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
      "trailer": "https://example.com/the_dark_knight_trailer.mp4",
      "runtime": 152,
      "awards": "Won 2 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$1.005 billion",
      "production": "Warner Bros. Pictures",
      "website": "https://www.warnerbros.com/movies/dark-knight"
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "year": 1994,
      "genre": [
        "Crime",
        "Drama"
      ],
      "rating": 8.9,
      "director": "Quentin Tarantino",
      "actors": [
        "John Travolta",
        "Uma Thurman",
        "Samuel L. Jackson"
      ],
      "plot": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqzGSUVlP74iyuFujryxWBYV6yqGirkn7BFHIJXEMzS4gNI-Z2wEKZsW6dLYA9B77BgyPdg",
      "trailer": "https://example.com/pulp_fiction_trailer.mp4",
      "runtime": 154,
      "awards": "Won 1 Oscar",
      "country": "USA",
      "language": "English",
      "boxOffice": "$213.9 million",
      "production": "Miramax Films",
      "website": "https://www.miramax.com/movie/pulp-fiction"
    },
    {
      "id": 5,
      "title": "Forrest Gump",
      "year": 1994,
      "genre": [
        "Drama",
        "Romance"
      ],
      "rating": 8.8,
      "director": "Robert Zemeckis",
      "actors": [
        "Tom Hanks",
        "Robin Wright",
        "Gary Sinise"
      ],
      "plot": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      "poster": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNI2SBzYW95C8Wo7zYV3bzVzem58xPnUzsZGLsnLg17mSMgR574acQZpgNK7a5XeF3THjqgQ",
      "trailer": "https://example.com/forrest_gump_trailer.mp4",
      "runtime": 142,
      "awards": "Won 6 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$677.9 million",
      "production": "Paramount Pictures",
      "website": "https://www.paramountmovies.com/movies/forrest-gump"
    },
    {
      "id": 6,
      "title": "Inception",
      "year": 2010,
      "genre": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "rating": 8.8,
      "director": "Christopher Nolan",
      "actors": [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Ellen Page"
      ],
      "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      "poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      "trailer": "https://example.com/inception_trailer.mp4",
      "runtime": 148,
      "awards": "Won 4 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$829.9 million",
      "production": "Warner Bros. Pictures",
      "website": "https://www.warnerbros.com/movies/inception"
    },
    {
      "id": 7,
      "title": "The Matrix",
      "year": 1999,
      "genre": [
        "Action",
        "Sci-Fi"
      ],
      "rating": 8.7,
      "director": "Lana Wachowski, Lilly Wachowski",
      "actors": [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Carrie-Anne Moss"
      ],
      "plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy",
      "trailer": "https://example.com/the_matrix_trailer.mp4",
      "runtime": 136,
      "awards": "Won 4 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$463.5 million",
      "production": "Warner Bros. Pictures",
      "website": "https://www.warnerbros.com/movies/matrix"
    },
    {
      "id": 8,
      "title": "The Lord of the Rings: The Return of the King",
      "year": 2003,
      "genre": [
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "rating": 8.9,
      "director": "Peter Jackson",
      "actors": [
        "Elijah Wood",
        "Viggo Mortensen",
        "Ian McKellen"
      ],
      "plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "poster": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQc9TF2jMcUd4xoSyvFS1be_J9C1jHLjm4FTAqmBJs9jcBLzOJoSvylFlc5zMbVnh0LofggQ",
      "trailer": "https://example.com/lotr_return_of_the_king_trailer.mp4",
      "runtime": 201,
      "awards": "Won 11 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$1.142 billion",
      "production": "New Line Cinema",
      "website": "https://www.lordoftherings.net/film/the-return-of-the-king"
    },
    {
      "id": 9,
      "title": "The Dark Knight Rises",
      "year": 2012,
      "genre": [
        "Action",
        "Thriller"
      ],
      "rating": 8.4,
      "director": "Christopher Nolan",
      "actors": [
        "Christian Bale",
        "Tom Hardy"
      ],
      "plot": "Eight years after the Joker's reign of anarchy, Batman is forced out of retirement to save Gotham City from the brutal guerrilla terrorist Bane.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBA5a1V4L0WZ7vOB8DLuZmWwdouli_6N1BUE9Lj46_Sx2Pzd5Hy9P7GNbXBL0a_fPcTrD",
      "trailer": "https://example.com/the_dark_knight_rises_trailer.mp4",
      "runtime": 165,
      "awards": "Nominated for 2 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$1.081 billion",
      "production": "Warner Bros. Pictures",
      "website": "http://www.warnerbros.com/movies/the-dark-knight-rises"
    },
    {
      "id": 10,
      "title": "Interstellar",
      "year": 2014,
      "genre": [
        "Adventure",
        "Drama",
        "Sci-Fi"
      ],
      "rating": 8.6,
      "director": "Christopher Nolan",
      "actors": [
        "Matthew McConaughey",
        "Anne Hathaway"
      ],
      "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
      "trailer": "https://example.com/interstellar_trailer.mp4",
      "runtime": 169,
      "awards": "Won 1 Oscar",
      "country": "USA",
      "language": "English",
      "boxOffice": "$677.5 million",
      "production": "Paramount Pictures",
      "website": "http://www.paramount.com/movies/interstellar"
    },
    {
      "id": 11,
      "title": "Fight Club",
      "year": 1999,
      "genre": [
        "Drama"
      ],
      "rating": 8.8,
      "director": "David Fincher",
      "actors": [
        "Brad Pitt",
        "Edward Norton",
        "Helena Bonham Carter"
      ],
      "plot": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "trailer": "https://example.com/fight_club_trailer.mp4",
      "runtime": 139,
      "awards": "Nominated for 1 Oscar",
      "country": "USA",
      "language": "English",
      "boxOffice": "$100.9 million",
      "production": "20th Century Fox",
      "website": "https://www.foxmovies.com/movies/fight-club"
    },
    {
      "id": 12,
      "title": "Gladiator",
      "year": 2000,
      "genre": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "rating": 8.5,
      "director": "Ridley Scott",
      "actors": [
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen"
      ],
      "plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRGc__T4VoKCsw2INBaxHysufNE6Eisnp6A&s",
      "trailer": "https://example.com/gladiator_trailer.mp4",
      "runtime": 155,
      "awards": "Won 5 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$460.5 million",
      "production": "DreamWorks Pictures",
      "website": "https://www.dreamworks.com/movies/gladiator"
    },
    {
      "id": 13,
      "title": "The Lord of the Rings: The Two Towers",
      "year": 2002,
      "genre": [
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "rating": 8.7,
      "director": "Peter Jackson",
      "actors": [
        "Elijah Wood",
        "Ian McKellen",
        "Viggo Mortensen"
      ],
      "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "trailer": "https://example.com/lotr_two_towers_trailer.mp4",
      "runtime": 179,
      "awards": "Won 2 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$951.2 million",
      "production": "New Line Cinema",
      "website": "https://www.lordoftherings.net/film/the-two-towers"
    },
    {
      "id": 14,
      "title": "The Silence of the Lambs",
      "year": 1991,
      "genre": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "rating": 8.6,
      "director": "Jonathan Demme",
      "actors": [
        "Jodie Foster",
        "Anthony Hopkins",
        "Lawrence A. Bonney"
      ],
      "plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "trailer": "https://example.com/silence_of_the_lambs_trailer.mp4",
      "runtime": 118,
      "awards": "Won 5 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$272.7 million",
      "production": "Orion Pictures",
      "website": "https://www.mgm.com/movies/the-silence-of-the-lambs"
    },
    {
      "id": 15,
      "title": "The Departed",
      "year": 2006,
      "genre": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "rating": 8.5,
      "director": "Martin Scorsese",
      "actors": [
        "Leonardo DiCaprio",
        "Matt Damon",
        "Jack Nicholson"
      ],
      "plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg",
      "trailer": "https://example.com/the_departed_trailer.mp4",
      "runtime": 151,
      "awards": "Won 4 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$289.8 million",
      "production": "Warner Bros. Pictures",
      "website": "https://www.warnerbros.com/movies/departed"
    },
    {
      "id": 16,
      "title": "Saving Private Ryan",
      "year": 1998,
      "genre": [
        "Drama",
        "War"
      ],
      "rating": 8.6,
      "director": "Steven Spielberg",
      "actors": [
        "Tom Hanks",
        "Matt Damon",
        "Tom Sizemore"
      ],
      "plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      "poster": "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "trailer": "https://example.com/saving_private_ryan_trailer.mp4",
      "runtime": 169,
      "awards": "Won 5 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$482.3 million",
      "production": "DreamWorks Pictures",
      "website": "https://www.dreamworks.com/movies/saving-private-ryan"
    },
    {
      "id": 17,
      "title": "The Prestige",
      "year": 2006,
      "genre": [
        "Drama",
        "Mystery",
        "Sci-Fi"
      ],
      "rating": 8.5,
      "director": "Christopher Nolan",
      "actors": [
        "Christian Bale",
        "Hugh Jackman",
        "Scarlett Johansson"
      ],
      "plot": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg",
      "trailer": "https://example.com/the_prestige_trailer.mp4",
      "runtime": 130,
      "awards": "Nominated for 2 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$109.7 million",
      "production": "Warner Bros. Pictures",
      "website": "https://www.warnerbros.com/movies/prestige"
    },
    {
      "id": 18,
      "title": "Glory",
      "year": 1989,
      "genre": [
        "Drama",
        "History",
        "War"
      ],
      "rating": 7.8,
      "director": "Edward Zwick",
      "actors": [
        "Matthew Broderick",
        "Denzel Washington",
        "Cary Elwes"
      ],
      "plot": "Robert Gould Shaw leads the U.S. Civil War's first all-black volunteer company, fighting prejudices from both his own Union Army and the Confederates.",
      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMl9tFqdQ9QsX9K9u-iO-fvj_FXILkyUlnGw&s",
      "trailer": "https://example.com/glory_trailer.mp4",
      "runtime": 122,
      "awards": "Won 3 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$26.8 million",
      "production": "TriStar Pictures",
      "website": "https://www.sonypictures.com/movies/glory"
    },
    {
      "id": 19,
      "title": "The Avengers",
      "year": 2012,
      "genre": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "rating": 8,
      "director": "Joss Whedon",
      "actors": [
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo"
      ],
      "plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "poster": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "trailer": "https://example.com/the_avengers_trailer.mp4",
      "runtime": 143,
      "awards": "Nominated for 1 Oscar",
      "country": "USA",
      "language": "English",
      "boxOffice": "$1.518 billion",
      "production": "Marvel Studios",
      "website": "https://www.marvel.com/movies/the-avengers"
    },
    {
      "id": 20,
      "title": "The Lion King",
      "year": 1994,
      "genre": [
        "Animation",
        "Adventure",
        "Drama"
      ],
      "rating": 8.5,
      "director": "Roger Allers, Rob Minkoff",
      "actors": [
        "Matthew Broderick",
        "Jeremy Irons",
        "James Earl Jones"
      ],
      "plot": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      "trailer": "https://example.com/the_lion_king_trailer.mp4",
      "runtime": 88,
      "awards": "Won 2 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$968.5 million",
      "production": "Walt Disney Pictures",
      "website": "https://movies.disney.com/the-lion-king"
    }
  ];

  export default movies;