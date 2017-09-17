import React from 'react';
import { GroupDiscount, LadiesNight } from './components';

const Deals = () =>
    <div className="deals main_content">
        <div className="row">
            <h1>
                <i className="fa fa-ticket" />
                Deals
            </h1>
            <div className="col-xs-12">
                <p className="blurb_pad">Check here regularly for new deals.</p>
            </div>
        </div>
        <GroupDiscount />
        <LadiesNight />
    </div>;
export default Deals;
