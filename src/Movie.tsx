import React from 'react';

interface IProps {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
}

const Movie: React.FunctionComponent<IProps> = ({
  id,
  year,
  title,
  summary,
  poster,
}) => {
  return <h4>{title}</h4>;
};

export default Movie;
