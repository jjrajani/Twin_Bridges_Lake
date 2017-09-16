import React from 'react';
const Deals = () =>
    <div className="deals">
        <div className="row">
            <h1>
                <i className="fa fa-ticket" />
                Deals
            </h1>
            <div className="col-xs-12">
                <p className="blurb_pad">Check here regularly for new deals.</p>
            </div>
        </div>
        <div className="row">
            <hr className="hr-extra-bottom-padding" />
            <div className="col-xs-12">
                <h1>
                    <i className="fa fa-users" />
                    Group Discount
                </h1>
                <p className="blurb_pad">
                    Groups of 10 or more people pay $10 per Adult.
                </p>
            </div>
        </div>
    </div>;
export default Deals;
