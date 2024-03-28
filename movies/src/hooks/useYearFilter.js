import { useState, useMemo } from 'react';

export const useYearFilter = (movies) => {
  const [year, setYear] = useState('');

  const filteredMovies = useMemo(() => {
    return year ? movies.filter(movie => movie.release_date.startsWith(year)) : movies;
  }, [movies, year]);

  return { year, setYear, filteredMovies };
};
