import React from 'react';
import OUR_FISH from './fishJSON';

const FishList = () => {
    return (
        <div className="row fish_list">
            {OUR_FISH.map((f, i) => {
                const STYLE_CLASS =
                    f.text === 'Bream'
                        ? 'col-xs-12 col-sm-6 col-md-4 fish_wrapper bream'
                        : f.text === 'Crappie'
                          ? 'col-xs-12 col-sm-6 col-md-4 fish_wrapper crappie'
                          : 'col-xs-12 col-sm-6 col-md-4 fish_wrapper';
                if (f.link.length > 0) {
                    return FishWithLink(f, i, STYLE_CLASS);
                } else {
                    return FishWithOutLink(f, i, STYLE_CLASS);
                }
            })}
        </div>
    );
};

const FishWithLink = (f, i, style) =>
    <div key={i} className={style}>
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
    </div>;

const FishWithOutLink = (f, i, style) =>
    <div key={i} className={style}>
        <div className="fish">
            <div className="img_wrapper">
                <img src={f.img} alt={f.linkAlt} />
            </div>
            <p>
                {f.text}
            </p>
        </div>
    </div>;

export default FishList;
