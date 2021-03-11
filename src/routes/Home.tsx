import React from 'react';
import { gql, useQuery } from '@apollo/client';

interface Movie {
  id: number;
  medium_cover_image: string;
}

interface Movies {
  movies: Movie[];
}

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Home() {
  const { loading, data } = useQuery<Movies>(GET_MOVIES);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data &&
            data.movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} alt="img" />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
