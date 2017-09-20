import React from 'react';

const FishWithOutLink = (f, i, style) =>
    <div key={i} className={style}>
        <div className="fish">
            <div className="img_wrapper">
                <img src={f.img} alt={f.linkAlt} />
            </div>
            <p itemProp="description">
                {f.text}
            </p>
        </div>
    </div>;

export default FishWithOutLink;
