import React from 'react';
import { getPopularMovies } from '../Services/apiServices';

function Movies() {
  getPopularMovies()
  return (
    <div>
      <h1>Movies</h1>
    </div>
  )
}

export default Movies
