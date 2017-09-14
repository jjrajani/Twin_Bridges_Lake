import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EnglishRules from './components/EnglishRules';
import SpanishRules from './components/SpanishRules';

class Rules extends Component {
  render() {
    const ENGLISH_BUTTON_CLASS =
      this.props.language === 'english' ? 'btn btn-primary' : 'btn btn-default';
    const SPANISH_BUTTON_CLASS =
      this.props.language === 'spanish' ? 'btn btn-primary' : 'btn btn-default';
    return (
      <div className="rules">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <div className="logo">
                <i className="fa fa-list" />
                <h1>
                  {this.props.language === 'english' ? 'Rules' : 'Reglas'}
                </h1>
              </div>
              <div className="buttons">
                <button
                  className={ENGLISH_BUTTON_CLASS}
                  onClick={this.props.toggleLanguage.bind(this, 'english')}
                >
                  English
                </button>
                <button
                  className={SPANISH_BUTTON_CLASS}
                  onClick={this.props.toggleLanguage.bind(this, 'spanish')}
                >
                  Spanish
                </button>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            {this.props.language === 'english'
              ? <EnglishRules />
              : <SpanishRules />}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ language }) {
  return { language };
}

export default connect(mapStateToProps, {
  toggleLanguage: actions.rulesActions.toggleLanguage
})(Rules);
