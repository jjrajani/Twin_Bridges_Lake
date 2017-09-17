import React from 'react';
import { connect } from 'react-redux';

const ListRules = ({ language }) =>
    <div className="col-xs-12 col-sm-6">
        <div className="logo">
            <i className="fa fa-list" />
            <h1>
                {language === 'english' ? 'Rules' : 'Reglas'}
            </h1>
        </div>
    </div>;

function mapStateToProps({ language }) {
    return { language };
}

export default connect(mapStateToProps, {})(ListRules);
