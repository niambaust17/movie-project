import React from 'react';
import { useHistory } from 'react-router';

const UpcomingInfo = (props) =>
{
    const { id, title, poster_path } = props.movie;
    let history = useHistory();
    return (
        <div className="col mb-3">
            <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w1280/${ poster_path }`} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <button onClick={() => history.push(`/movie/${ id }`)} className="btn btn-outline-success btn-sm">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingInfo;