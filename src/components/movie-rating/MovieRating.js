import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './MovieRating.css';

function MovieRating(props) {
    const { rating } = props;

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    return <div id="movie-rating">{stars}</div>;
}

export default MovieRating;
