import React, { Component } from 'react';
import * as actions from '../../../../../actions';
import { connect } from 'react-redux';
import ActiveStar from './ActiveStar';
import InactiveStar from './InactiveStar';

class RatingSelect extends Component {
  renderStars() {
    let HTML = [];
    for (let i = 1; i <= 5; i++) {
      HTML.push(
        this.props.hoverRating >= i || this.props.rating >= i
          ? <ActiveStar
              key={i}
              rating={i}
              onMouseEnter={this.props.onMouseEnter.bind(this, i)}
              onMouseLeave={this.props.onMouseLeave.bind(this, i)}
              onMouseClick={this.props.selectRating.bind(this, i)}
            />
          : <InactiveStar
              key={i}
              rating={i}
              onMouseEnter={this.props.onMouseEnter.bind(this, i)}
              onMouseLeave={this.props.onMouseLeave.bind(this, i)}
              onMouseClick={this.props.selectRating.bind(this, i)}
            />
      );
    }
    return HTML;
  }

  render() {
    return (
      <div className="rating_select">
        <p className="invalid_message">Please select a rating</p>
        {this.renderStars()}
      </div>
    );
  }
}

function mapStateToProps({ selectStars }) {
  return {
    ...selectStars
  };
}

export default connect(mapStateToProps, {
  onMouseEnter: actions.selectStarsActions.onMouseEnter,
  onMouseLeave: actions.selectStarsActions.onMouseLeave,
  selectRating: actions.selectStarsActions.selectRating
})(RatingSelect);
