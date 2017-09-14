import React from 'react';
import ENGLISH_RULES from '../englishRules';

const EnglishRules = () =>
  <div className="rules">
    <div className="col-xs-12">
      <ul>
        {ENGLISH_RULES.map(r => {
          return (
            <li>
              {r}
            </li>
          );
        })}
      </ul>
    </div>
  </div>;

export default EnglishRules;
