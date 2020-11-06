import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import SearchList from './components/layout/SearchList';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={SearchList} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
