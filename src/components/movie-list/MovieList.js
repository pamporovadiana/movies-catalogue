import React, { Component } from 'react';
import Card from '../card/Card';

class MovieList extends Component {
    render() {
        const movieCards = this.props.data.map(({ id, image, title, quality }) =>
            (<Card key={id} id={id} image={image} title={title} quality={quality} />));

        return (
            <section className="movies-cards">
                {movieCards}
            </section>
        );
    }
}

export default MovieList;
