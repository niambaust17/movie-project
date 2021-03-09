import React, { useState, useEffect } from 'react';
import TopRatedInfo from '../TopRatedInfo/TopRatedInfo';

const TopRated = () =>
{
    const [topMovies, setTopMovies] = useState([]);
    const apiKey = '04b57bb94c48955990ef459d61b479d2';
    useEffect(() =>
    {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ apiKey }&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setTopMovies(data.results))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    topMovies.map(movie => <TopRatedInfo key={movie.id} movie={movie}></TopRatedInfo>)
                }
            </div>
        </div>
    );
};

export default TopRated;