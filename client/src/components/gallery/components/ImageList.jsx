import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class ImageList extends Component {
    componentDidMount() {
        this.props.fetchPics();
    }
    render() {
        return (
            <div className="col-xs-12">
                <ul className="image_list">
                    {this.props.pics.map(p => {
                        return (
                            <a
                                href={p}
                                className="img_wrapper col-xs-12 col-sm-6 col-md-4"
                            >
                                <li
                                    key={p}
                                    className="image_item"
                                    style={{
                                        backgroundImage: `url(${p})`
                                    }}
                                />
                            </a>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ pics }) {
    return { pics };
}

export default connect(mapStateToProps, {
    fetchPics: actions.picsActions.fetchPics
})(ImageList);
