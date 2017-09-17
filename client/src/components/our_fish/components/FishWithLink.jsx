import React from 'react';

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

export default FishWithLink;
