import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MovieItemProps = {
  id: number;
  medium_cover_image: string;
};

type PosterProps = {
  bg: string;
};

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${(props: PosterProps) => props.bg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: white;
`;

function MovieItem({ id, medium_cover_image }: MovieItemProps) {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={medium_cover_image} />
      </Link>
    </Container>
  );
}

export default MovieItem;
