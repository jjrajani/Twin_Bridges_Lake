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
import Scroll from 'react-scroll';

import scrollPoints from '../home/utils/scrollPoints';

const scroller = Scroll.scroller;

class Home extends Component {
    componentDidMount() {
      if (window.location.hash === '#about_us') {
        const { to, pad } = scrollPoints["#about_us"];
        scroller.scrollTo( to, {...pad, offset: -51} );
      }
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
