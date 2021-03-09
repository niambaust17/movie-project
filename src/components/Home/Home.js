import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';


const Home = () =>
{
    const [movies, setMovies] = useState([]);
    const apiKey = '04b57bb94c48955990ef459d61b479d2';
    useEffect(() =>
    {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${ apiKey }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
                }
            </div>
        </div>
    );
};

export default Home;