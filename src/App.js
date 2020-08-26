import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import LogIn from './components/log-in/LogIn';
import Register from './components/register/Register';
import Main from './components/main/Main';
import MovieDetails from './components/movie-details/MovieDetails';
import MovieVideo from './components/movie-video/MovieVideo';

import './App.css';
import './reset.css';
import './typography.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/genre" component={Main} />
                    <Route exact path="/country" component={Main} />
                    <Route exact path="/tv-series" component={Main} />
                    <Route exact path="/a-z" component={Main} />
                    <Route exact path="/most-watched" component={Main} />
                    <Route exact path="/movie-video/:id" render={(props) => <MovieVideo {...props} />} />
                    <Route exact path="/movie-details/:id" render={(props) => <MovieDetails {...props} />} />
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
