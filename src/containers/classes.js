import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../actions/index';

class Classes extends Component {

  componentWillMount() {
    this.props.getClasses();
  }

  render () {
    return (
      <div>
        <h2>TIME FOR A CLASS!!!!</h2>
        <p>{ this.props.text.classes }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { text: state.classes };
}

export default connect( mapStateToProps, { getClasses })(Classes);
