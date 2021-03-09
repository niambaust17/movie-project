import React, { useState, useEffect } from 'react';
import UpcomingInfo from '../UpcomingInfo/UpcomingInfo';

const Upcoming = () =>
{
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const apiKey = '04b57bb94c48955990ef459d61b479d2';
    useEffect(() =>
    {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ apiKey }&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setUpcomingMovies(data.results))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    upcomingMovies.map(movie => <UpcomingInfo key={movie.id} movie={movie}></UpcomingInfo>)
                }
            </div>
        </div>
    );
};

export default Upcoming;