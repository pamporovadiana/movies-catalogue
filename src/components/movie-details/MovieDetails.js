import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './MovieDetails.css';

import MoviesService from '../../services/MoviesService';
import MovieRating from '../movie-rating/MovieRating';

class MovieDetails extends Component {
    constructor() {
        super();

        this.moviesService = new MoviesService();
        this.state = {
            director: '',
            genre: '',
            image: '',
            plot: '',
            quality: '',
            rating: '',
            stars: '',
            title: '',
            trailerSrc: '',
            year: '',
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        const rawData = await this.moviesService.getMovieById(id);
        if (!rawData) return;

        this.setState({
            director: rawData.director,
            genre: rawData.genre,
            image: rawData.image,
            plot: rawData.plot,
            quality: rawData.quality,
            rating: rawData.rating,
            stars: rawData.stars,
            title: rawData.title,
            trailerSrc: rawData.trailerSrc,
            year: rawData.year,
        });
    }

    render() {
        const { director, genre, image, plot, stars, title, trailerSrc, year } = this.state;
        const { id } = this.props.match.params;

        return (
            <div id="movie-details">
                <div id="movie-image">
                    <img src={image} alt="pic" />
                </div>
                <div id="movie-info">
                    <div id="movie-trailer">
                        <iframe width="560" height="315" src={trailerSrc} title="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        {/* <div id="watch-video-button"><Link to="/video">Watch Movie Online</Link></div> */}
                        <Link to={`/movie-video/${id}`} id="watch-video-button">Watch Movie Online</Link>
                    </div>
                    <h2>{title}</h2>
                    <div className="movie-info">
                        ({year})
                    </div>
                    <MovieRating rating={this.state.rating} />
                    <div className="movie-info">
                        <span>Director:</span>
                        {director}
                    </div>
                    <div className="movie-info">
                        <span>Genre:</span>
                        {genre}
                    </div>
                    <div className="movie-info">
                        <span>Stars:</span>
                        {stars}
                    </div>
                    <p className="movie-info" id="plot"><
                        span>Plot:</span>
                        {plot}
                    </p>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
