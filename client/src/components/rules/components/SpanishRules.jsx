import React from 'react';
import SPANISH_RULES from '../spanishRules';

const SpanishRules = () =>
  <div className="rules">
    <div className="col-xs-12">
      <ul>
        {SPANISH_RULES.map(r => {
          return (
            <li>
              {r}
            </li>
          );
        })}
      </ul>
    </div>
  </div>;

export default SpanishRules;
