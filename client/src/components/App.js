import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
  Header,
  Landing,
  Gallery,
  ReviewsList,
  FishStock,
  Admissions,
  BaitList,
  OurStory,
  Location
} from './';

const Footer = () => {
  return (
    <div className={`footer`}>
      <h4>1119 Braselton Hwy, Lawrenceville Ga, 30043</h4>
      <h4>(770) 963-6739</h4>
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const wrapperClass =
      window.location.pathname === '/' ? 'wrapper_landing' : 'wrapper';
    const scrollClass = this.props.showGalleryModal === true ? 'no_scroll' : '';
    return (
      <div className={`${wrapperClass} ${scrollClass}`}>
        <BrowserRouter>
          <div>
            {window.location.pathname !== '/' ? <Header /> : null}
            <Route exact path="/" component={Landing} />
            <Route exact path="/story" component={OurStory} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/reviews" component={ReviewsList} />
            <Route exact path="/bait" component={BaitList} />
            <Route exact path="/admissions" component={Admissions} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/fish" component={FishStock} />
          </div>
        </BrowserRouter>
        {window.location.pathname !== '/' &&
        this.props.showGalleryModal === false
          ? <Footer />
          : null}
      </div>
    );
  }
}

function mapStateToProps({ showGalleryModal }) {
  return { showGalleryModal };
}

export default connect(mapStateToProps, actions.authActions)(App);
