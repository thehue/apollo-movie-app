import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
type DetailParams = {
  id: string;
};

type Movie = {
  title: string;
  description_full: string;
  medium_cover_image: string;
  language: string[];
  rating: number;
};

type Data = {
  movie: Movie;
};

type MovieData = {
  id: number;
};

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      description_full
      medium_cover_image
      rating
      language
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

type PosterProps = {
  bg: string;
};

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background: url(${(props: PosterProps) => props.bg}) no-repeat;
  background-size: contain;
  background-position: center;
`;

function Detail({ match }: RouteComponentProps<DetailParams>) {
  const { id } = match.params;
  const { loading, data } = useQuery<Data, MovieData>(GET_MOVIE, {
    variables: {
      id: Number(id),
    },
  });

  return (
    <Container>
      {loading ? (
        <p style={{ fontSize: '40px' }}>Loading...</p>
      ) : (
        <>
          {data && data.movie && (
            <>
              <Column>
                <Title>{data.movie.title}</Title>
                <Subtitle>
                  {data.movie.language} · {data.movie.rating}
                </Subtitle>
                <Description>{data.movie.description_full} </Description>
              </Column>
              <Poster bg={data.movie.medium_cover_image}></Poster>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default Detail;
