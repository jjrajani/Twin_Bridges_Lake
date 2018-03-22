import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
    Deals,
    Footer,
    Gallery,
    Header,
    Home,
    Nav,
    OurFish,
    PageNotFound,
    Rules
} from './';

const App = ({ fetchUser }) => {
    return (
        <div className="wrapper">
            <Nav />
            <Header />
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/rules" component={Rules} />
                        <Route exact path="/our_fish" component={OurFish} />
                        <Route exact path="/deals" component={Deals} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default connect(null, { fetchUser: actions.authActions.fetchUser })(App);
