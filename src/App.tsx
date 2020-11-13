import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import SearchList from './components/layout/SearchList';
import People from './components/AboutPeople/People';
import Movies from './components/AboutMovies/Movies';
import MovieDetail from './components/AboutMovies/MovieDetail';
import fetchMovies from './Slice/moviesThunk';
import fetchPeople from './Slice/peopleThunk';
import { useAppDispatch } from './store';

import './App.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const call = async () => {
      dispatch(fetchMovies());
      dispatch(fetchPeople());
    };
    call();
  }, [dispatch]);
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={SearchList} />
          <Route exact path='/people/:name' component={People} />
          <Route exact path='/movies/:title' component={Movies} />
          <Route exact path='/movieDetail/:id' component={MovieDetail} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
