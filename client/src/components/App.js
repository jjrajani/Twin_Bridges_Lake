import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { JsonLd } from '../utils/JsonLd';
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

const data = {
    '@​context': 'http://json-ld.org/contexts/business.jsonld',
    '@​id': 'http://www.twinbridgeslake.fish',
    name: 'Twin Bridges Lake',
    address: '1119 Braselton Hwy Lawrenceville Ga 30043'
};

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
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
                <JsonLd data={data} />
            </div>
        );
    }
}

export default connect(null, { fetchUser: actions.authActions.fetchUser })(App);
