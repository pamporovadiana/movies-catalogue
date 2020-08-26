import React from 'react';
import './MoviesFilter.css';

function MoviesFilter() {
    return (
        <div id="filters-field">
            <h2>Filter movies:</h2>
            <div id="filters">
                <div className="filter">
                    <h3>By Genre:</h3>
                    <ul>
                        <li>
                            <label htmlFor="comedy">Comedy
                                <input type="radio" id="comedy" name="genre" value="comedy"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="romantic">Romantic
                                <input type="radio" id="romantic" name="genre" value="romantic"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="drama">Drama
                                <input type="radio" id="drama" name="genre" value="male"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="action">Action
                                <input type="radio" id="action" name="genre" value="male"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="syfy">Syfy
                                <input type="radio" id="syfy" name="genre" value="male"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="thriler">Thriler
                                <input type="radio" id="thriler" name="genre" value="male"/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="filter">
                    <h3>By Country:</h3>
                    <ul>
                        <li>
                            <label htmlFor="comedy">USA
                                <input type="radio" id="usa" name="country" value="usa"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="bulgaria">Bulgaria
                                <input type="radio" id="bulgaria" name="country" value="bulgaria"/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="filter">
                <h3>Alphabetically:</h3>
                <ul>
                    <li>
                        <label htmlFor="2020">2020
                            <input type="radio" id="2020" name="year" value="2020"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="2019">2019
                            <input type="radio" id="2019" name="year" value="2019"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="2018">2018
                            <input type="radio" id="2018" name="year" value="2018"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="2017">2017
                            <input type="radio" id="2017" name="year" value="2017"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="2016">2016
                            <input type="radio" id="2016" name="year" value="2016"/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="2015">2015
                            <input type="radio" id="2015" name="year" value="2015"/>
                        </label>
                    </li>
                </ul>
            </div>
                <div className="filter">
                    <h3>By Rating:</h3>
                    <ul>
                        <li>
                            <label htmlFor="comedy">Comedy
                                <input type="radio" id="comedy" name="rating" value="comedy"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="romantic">Romantic
                                <input type="radio" id="romantic" name="rating" value="romantic"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="drama">Drama
                                <input type="radio" id="drama" name="rating" value="drama"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="action">Action
                                <input type="radio" id="action" name="rating" value="action"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="syfy">Syfy
                                <input type="radio" id="syfy" name="rating" value="syfy"/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="thriler">Thriler
                                <input type="radio" id="thriler" name="rating" value="thriler"/>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MoviesFilter;
