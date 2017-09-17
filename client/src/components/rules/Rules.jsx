import React from 'react';
import { ListRules, RulesHeader, SelectLanguage } from './components';

const Rules = () =>
    <div className="rules main_content">
        <div className="row">
            <RulesHeader />
            <SelectLanguage />
            <ListRules />
        </div>
    </div>;

export default Rules;
