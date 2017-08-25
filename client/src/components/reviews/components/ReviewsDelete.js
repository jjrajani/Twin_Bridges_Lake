import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class DeleteReveiw extends Component {
  render() {
    if (this.props.auth && this.props.auth.admin) {
      return (
        <div className="reviews_delete">
          <i
            onClick={() => this.props.deleteReview(this.props.review._id)}
            className="fa fa-trash-o"
          />
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions.reviewsActions)(DeleteReveiw);
