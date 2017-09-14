import React, { Component } from 'react';
import OUR_FISH from './fish';
import FISH_ICON from './images/fish_icon.png';

class OurFish extends Component {
  render() {
    return (
      <div className="our_fish">
        <div className="row">
          <div className="col-xs-12">
            <div className="logo">
              <img src={FISH_ICON} className="fish_icon" alt="our fish icon" />
              <h1>Our Fish</h1>
            </div>
            <p>
              Twin Bridges Lake is regularly stocked with farm raised catfish to
              insure the best eating quality. We also periodically stock Monster
              Catfish always over 40lbs for those thrill seeking anglers.
            </p>
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
              <div className="alert alert-success text-center">
                We do not feed our fish so you know they're always biting.
              </div>
            </div>
          </div>
        </div>
        <div className="row fish_list">
          {this.renderFish()}
        </div>
      </div>
    );
  }

  renderFish() {
    return OUR_FISH.map((f, i) => {
      const STYLE_CLASS =
        f.text === 'Bream'
          ? 'col-xs-12 col-sm-6 col-md-4 fish_wrapper bream'
          : f.text === 'Crappie'
            ? 'col-xs-12 col-sm-6 col-md-4 fish_wrapper crappie'
            : 'col-xs-12 col-sm-6 col-md-4 fish_wrapper';
      if (f.link.length > 0) {
        return (
          <div key={i} className={STYLE_CLASS}>
            <div className="fish">
              <a href={f.link} alt={f.linkAlt} target="blank">
                <div className="img_wrapper">
                  <img src={f.img} alt={f.linkAlt} />
                </div>
                <p>
                  {f.text}
                </p>
              </a>
            </div>
          </div>
        );
      } else {
        return (
          <div key={i} className={STYLE_CLASS}>
            <div className="fish">
              <div className="img_wrapper">
                <img src={f.img} alt={f.linkAlt} />
              </div>
              <p>
                {f.text}
              </p>
            </div>
          </div>
        );
      }
    });
  }
}

export default OurFish;
