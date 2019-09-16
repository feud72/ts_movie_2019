import React from 'react';
import axios from 'axios';
import Movie from './Movie';

interface IMovie {
  id: number;
  title: string;
  year: number;
  summary: string;
  medium_cover_image: string;
}

interface IState {
  isLoading: boolean;
  movies: IMovie[];
}

class App extends React.Component {
  state: IState = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
    );
    this.setState({movies, isLoading: false});
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading
          ? 'Loading...'
          : movies.length > 0 &&
            movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
