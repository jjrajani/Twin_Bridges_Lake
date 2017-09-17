import React from 'react';
import {
    AboutUs,
    Admissions,
    Contact,
    Hours,
    KidsPond,
    Location
} from './components';

const Home = () => {
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
};

export default Home;
