import React, { Component } from 'react';
import MovieCard from '../movie-card/MovieCard';

class MovieList extends Component {
    render() {
        const movieCards = this.props.data.map(({ id, image, title, quality }) =>
            (<MovieCard key={id} id={id} image={image} title={title} quality={quality} />));

        return (
            <section className="movies-cards">
                {movieCards}
            </section>
        );
    }
}

export default MovieList;
