import React from 'react';
import { ListRules, RulesHeader, SelectLanguage } from './components';

const Rules = () =>
    <div className="rules main_content">
        <div className="row">
            <RulesHeader />
            <SelectLanguage />
        </div>
        <ListRules />
    </div>;

export default Rules;
