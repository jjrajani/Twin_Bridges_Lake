import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RatingSelect } from './components';

class ReviewsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {
        rating: 0,
        text: 'Leave your review...'
      }
    };
  }
  selectRating(rating) {
    console.log('selecting rating', rating);
  }
  handleChange(e) {
    this.setState({
      review: {
        rating: this.state.review.rating,
        text: e.target.value
      }
    });
  }

  render() {
    return (
      <div>
        <p onClick={() => this.props.close()}>
          <i className="fa fa-times" />
        </p>
        <form>
          <div className="input-row">
            <label>Rating</label>
            <RatingSelect selectRating={this.selectRating} />
          </div>
          <div className="input-row">
            <label>Review</label>
            <textarea
              onChange={this.handleChange.bind(this)}
              type="text"
              value={this.state.review.text}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions.reviewsActions)(ReviewsNew);
