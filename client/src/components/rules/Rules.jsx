import React, { Component } from 'react';
import { setAndSendPageview } from '../../utils/googleAnalytics';
import { ListRules, RulesHeader, SelectLanguage } from './components';

class Rules extends Component {
    componentDidMount() {
        setAndSendPageview(window, '/rules');
    }
    render() {
        return (
            <div className="rules main_content">
                <div className="row">
                    <RulesHeader />
                    <SelectLanguage />
                    <ListRules />
                </div>
            </div>
        );
    }
}

export default Rules;
