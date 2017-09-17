import React from 'react';
import {
    AboutUs,
    Contact,
    Hours,
    Admissions,
    Location,
    KidsPond
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
