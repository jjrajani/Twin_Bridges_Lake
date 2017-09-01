import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
  Header,
  Landing,
  Gallery,
  Reviews,
  FishStock,
  Admissions,
  BaitList,
  OurStory,
  Location,
  Footer,
  Hamburger
} from './';

const App = ({ fetchUser }) => {
  fetchUser();
  return (
    <div className="wrapper">
      <Header />
      <Hamburger />
      <BrowserRouter>
        <div className="main-content-wrapper">
          <Route exact path="/" component={Landing} />
          <Route exact path="/story" component={OurStory} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/bait" component={BaitList} />
          <Route exact path="/admissions" component={Admissions} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/fish" component={FishStock} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default connect(null, { fetchUser: actions.authActions.fetchUser })(App);
