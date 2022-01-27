import React, { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';
import MovieCard from './MovieCard';
// import movies from './movies.json';
import styles from './MoviesGrid.module.css';


function MoviesGrid() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <ul className= { styles.moviesGrid}>
            {movies.map((movie) => ( 
                <MovieCard 
                    movie = { movie }
                    key = { movie.id }
                />
            ))}
        </ul>
    )
}

export default MoviesGrid
