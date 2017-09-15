import React from 'react';

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <p>&copy; Twin Bridges Lake</p>
                    </div>
                    <div className="col-xs-6 right_align">
                        <p>
                            Built by{' '}
                            <a href="https://jjrajani.github.io/#/home">
                                humdrum
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
