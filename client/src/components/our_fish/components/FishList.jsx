import React from 'react';
import FISH from '../fish';
import { FishWithLink, FishWithOutLink } from './';
import applyClass from '../utils/style_classes';

const FishList = () => {
    return (
        <div className="row fish_list">
            {FISH.map((fish, i) => {
                const style = applyClass(fish);
                if (fish.link.length > 0) {
                    return FishWithLink(fish, i, style);
                } else {
                    return FishWithOutLink(fish, i, style);
                }
            })}
        </div>
    );
};

export default FishList;
