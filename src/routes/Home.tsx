import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import MovieItem from './MovieItem';

interface Movie {
  id: number;
  medium_cover_image: string;
}

interface Movies {
  movies: Movie[];
}

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

function Home() {
  const { loading, data } = useQuery<Movies>(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <MoviesContainer>
        {data?.movies?.map((m) => (
          <MovieItem
            key={m.id}
            id={m.id}
            medium_cover_image={m.medium_cover_image}
          />
        ))}
      </MoviesContainer>
    </Container>
  );
}

export default Home;
