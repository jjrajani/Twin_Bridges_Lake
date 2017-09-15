import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const SelectLanguage = ({ language, toggleLanguage }) => {
    const ENGLISH_BUTTON_CLASS =
        language === 'english' ? 'btn btn-primary' : 'btn btn-default';
    const SPANISH_BUTTON_CLASS =
        language === 'spanish' ? 'btn btn-primary' : 'btn btn-default';
    return (
        <div className="col-xs-12 col-sm-6 buttons">
            <button
                className={ENGLISH_BUTTON_CLASS}
                onClick={toggleLanguage.bind(this, 'english')}
            >
                English
            </button>
            <button
                className={SPANISH_BUTTON_CLASS}
                onClick={toggleLanguage.bind(this, 'spanish')}
            >
                Spanish
            </button>
        </div>
    );
};
function mapStateToProps({ language }) {
    return { language };
}
export default connect(mapStateToProps, {
    toggleLanguage: actions.rulesActions.toggleLanguage
})(SelectLanguage);
