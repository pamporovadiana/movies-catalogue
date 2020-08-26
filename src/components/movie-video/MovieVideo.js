import React, { Component } from 'react';
import './MovieVideo.css';
import MoviesService from '../../services/MoviesService';

class MovieVideo extends Component {
    constructor() {
        super();

        this.moviesService = new MoviesService();
        this.state = {
            trailerSrc: ''
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const rawData = await this.moviesService.getMovieById(id);
        if (!rawData) return;

        this.setState({
            trailerSrc: rawData.trailerSrc,
        });
    }

    render() {
        return (
            <div id="movie">
                <iframe title="iframe" src={this.state.trailerSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default MovieVideo;
