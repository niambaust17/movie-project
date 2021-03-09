import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const MovieInfo = () =>
{
    let { id } = useParams();
    const apiKey = '04b57bb94c48955990ef459d61b479d2';
    const [movie, setMovie] = useState({});
    useEffect(() =>
    {
        fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ apiKey }&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [id])
    const { title, poster_path, release_date, overview } = movie;
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4 text-center">
                            <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${ poster_path }`} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{overview}</p>
                                <p className="card-text"><small className="text-muted">Release Date {release_date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;