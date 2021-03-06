import React from 'react';
import { connect } from 'react-redux';
import RULES from '../rules_lists/rules';

const ListRules = ({ language }) =>
    <div className="col-xs-11 col-xs-offset-1 col-sm-12 col-sm-offset-0 rules_list">
        <div className="rules">
            <div className="col-xs-12">
                <ul>
                    {RULES[language].map(r =>
                        <li>
                            {r}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </div>;

function mapStateToProps({ language }) {
    return { language };
}

export default connect(mapStateToProps, {})(ListRules);
