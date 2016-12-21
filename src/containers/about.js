import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAbout } from '../actions/index';

class About extends Component {

  render () {
    return (
      <div>
        <h2>ABOUT IS RENDERING!!!!</h2>
        <p>{ this.props.text.about }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { text: state.about };
}

export default connect( mapStateToProps, { getAbout })(About);
