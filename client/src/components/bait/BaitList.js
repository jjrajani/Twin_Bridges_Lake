import React, { Component } from 'react';
import { LiveBait, Bait, FakeBait } from './components';

class BaitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnMount() {
    window.removeEventListener('scroll');
  }
  handleScroll() {
    let fixedHeader = 0;
    window.scrollY > 1516
      ? (fixedHeader = 3)
      : window.scrollY > 1043
        ? (fixedHeader = 2)
        : window.scrollY > 201 ? (fixedHeader = 1) : (fixedHeader = 0);
    this.setState({ fixedHeader });
  }
  render() {
    return (
      <div className="bait content">
        <h2 className="sub_header">Bait</h2>
        <p className="text">
          We have all the bait in the world everything is here no matter what
          you need we have it long time
        </p>
        <LiveBait
          zIndex={30}
          styleClass={
            this.state.fixedHeader >= 1
              ? 'live_bait_sub_header_fixed'
              : 'live_bait_sub_header'
          }
        />
        <Bait
          zIndex={31}
          styleClass={
            this.state.fixedHeader >= 2
              ? 'bait_sub_header_fixed'
              : 'bait_sub_header'
          }
        />
        <FakeBait
          zIndex={32}
          styleClass={
            this.state.fixedHeader >= 3
              ? 'fake_bait_sub_header_fixed'
              : 'fake_bait_sub_header'
          }
        />
      </div>
    );
  }
}

export default BaitList;
