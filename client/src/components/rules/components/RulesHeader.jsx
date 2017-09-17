import React from 'react';
import { connect } from 'react-redux';

const ListRules = ({ language }) =>
    <div className="col-xs-12 col-sm-6">
        <h1>
            <i className="fa fa-list" />
            {language === 'english' ? 'Rules' : 'Reglas'}
        </h1>
    </div>;

function mapStateToProps({ language }) {
    return { language };
}

export default connect(mapStateToProps, {})(ListRules);
