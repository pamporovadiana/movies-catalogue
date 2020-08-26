import React from 'react';
import { Link } from "react-router-dom";

import './Card.css';

function Card(props) {
    const { id, image, title, quality } = props;

    return (
        <div className="movie-card">
            <div className="card-elements">
                <div className="card-data">
                    <img src={image} className="card-img" alt="some-pic" />
                    <span className="card-quality">{quality}</span>
                    <div className="card-title"><h5>{title}</h5></div>
                </div>
                <div className="card-btns">
                    <Link to={`/movie-details/${id}`} className="card-btn">Details</Link>
                    <Link to={`/movie-video/${id}`} className="card-btn">Play Movie</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
