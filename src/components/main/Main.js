import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import './Main.css';

import MovieList from '../movie-list/MovieList';
import FilterMovies from '../movies-filter/MoviesFilter';
import MoviesService from '../../services/MoviesService';

class Main extends Component {
    pageSize = 12;
    pageRange = 5;

    constructor(props) {
        super(props);

        this.moviesService = new MoviesService();

        this.state = {
            movies: {
                count: 0,
                data: []
            },
            activePage: 1
        };

        this.PageHandler = this.PageHandler.bind(this);
    }

    // React hooks
    async componentDidMount() {
        this.getPageMovies();
    }
    
    // Public methods
    PageHandler(pageNumber) {
        this.setState({ activePage: pageNumber }, () => this.getPageMovies());
    }

    // Private methods
    async getPageMovies() {
        const { activePage } = this.state;
        const movies = await this.moviesService.getMovies(activePage, this.pageSize);
        if (!movies) return;
        this.setState({ movies: { count: movies.count, data: this.mapMovies(movies.data) }});
    }
    
    mapMovies(movies) {
        return movies.map(m => {
            return {
                id: m.key,
                title: m.title,
                image: m.image,
                quality: m.quality,
            };
        });
    }

    render() {
        const { movies, activePage } = this.state;
        return (
            <main>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={this.pageSize}
                    totalItemsCount={movies.count}
                    pageRangeDisplayed={this.pageRange}
                    onChange={this.PageHandler}
                />
                <FilterMovies />
                <MovieList data={movies.data} />
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={this.pageSize}
                    totalItemsCount={movies.count}
                    pageRangeDisplayed={this.pageRange}
                    onChange={this.PageHandler}
                />
            </main>
        );
    }
}

export default Main;
