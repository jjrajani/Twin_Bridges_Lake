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
    window.scrollY > 1175
      ? (fixedHeader = 3)
      : window.scrollY > 842
        ? (fixedHeader = 2)
        : window.scrollY >= 0 ? (fixedHeader = 1) : (fixedHeader = 0);
    this.setState({ fixedHeader });
  }
  render() {
    return (
      <div className="main-content">
        <div className="bait content">
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
      </div>
    );
  }
}

export default BaitList;
