import React from 'react';
import "./Movie.css";

interface IProps {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: string[];
}

const Movie: React.FunctionComponent<IProps> = ({
  id,
  year,
  title,
  summary,
  poster,
  genres,
}) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0,180)}...</p>
      </div>
    </div>
  );
};

export default Movie;
