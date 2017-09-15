import React, { Component } from 'react';
import { ListRules, RulesHeader, SelectLanguage } from './components';

const Rules = () =>
    <div className="rules">
        <div className="row">
            <RulesHeader />
            <SelectLanguage />
        </div>
        <ListRules />
    </div>;

export default Rules;
