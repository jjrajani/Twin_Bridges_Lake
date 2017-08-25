import React, { Component } from 'react';
import ActiveStar from './ActiveStar';
import InactiveStar from './InactiveStar';

class RatingSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverRating: 0,
      rating: 0
    };
  }
  handleMouseEnter(rating) {
    this.setState({ hoverRating: rating });
  }
  handleClick(rating) {
    this.setState({ rating: rating });
    this.props.selectRating(rating);
  }
  renderStars() {
    let HTML = [];
    for (let i = 1; i <= 5; i++) {
      HTML.push(
        this.state.hoverRating >= i || this.state.rating >= i
          ? <ActiveStar
              key={i}
              rating={i}
              onMouseEnter={this.handleMouseEnter.bind(this, i)}
              onMouseClick={this.handleClick.bind(this, i)}
            />
          : <InactiveStar
              key={i}
              rating={i}
              onMouseEnter={this.handleMouseEnter.bind(this, i)}
              onMouseClick={this.handleClick.bind(this, i)}
            />
      );
    }
    return HTML;
  }

  render() {
    return (
      <div className="rating_select">
        {this.renderStars()}
      </div>
    );
  }
}

export default RatingSelect;
