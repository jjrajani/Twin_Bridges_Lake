import React, { Component } from 'react';
import { setAndSendPageview } from '../../utils/googleAnalytics';
import {
    AboutUs,
    Admissions,
    Contact,
    Hours,
    KidsPond,
    Location
} from './components';

class Home extends Component {
    componentDidMount() {
        setAndSendPageview(window, '/home');
    }
    render() {
        return (
            <div className="main_content home">
                <AboutUs />
                <Location />
                <Hours />
                <KidsPond />
                <Admissions />
                <Contact />
            </div>
        );
    }
}

export default Home;
