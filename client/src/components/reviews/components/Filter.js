import React from 'react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

const Filter = ({ filterReviews }) => {
  console.log(filterReviews);
  return (
    <div className="filter">
      <form>
        <label>Filter</label>
        <select onChange={filterReviews.bind(this)} name="filter">
          <option value="0">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
      </form>
    </div>
  );
};

export default connect(null, {
  filterReviews: actions.reviewsActions.filterReviews
})(Filter);
