import React from 'react';
import FISH_ICON from '../../assets/fish_icon.png';
import { FishList } from './components';

const OurFish = () =>
    <div className="our_fish main_content">
        <div className="row">
            <div className="col-xs-12">
                <div className="header">
                    <img
                        src={FISH_ICON}
                        className="fish_icon"
                        alt="Twin Bridges Lake fish icon"
                    />
                    <h1>Our Fish</h1>
                </div>
                <p>
                    Twin Bridges Lake is regularly stocked with farm raised
                    catfish to insure the best eating quality. We also
                    periodically stock Monster Catfish always over 40lbs for
                    those thrill seeking anglers.
                </p>
                <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
                    <div className="alert alert-success text-center top_pad">
                        We do not feed our fish so you know they're always
                        biting.
                    </div>
                </div>
            </div>
        </div>
        <FishList />
    </div>;

export default OurFish;
