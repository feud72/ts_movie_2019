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
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
};

export default Movie;
