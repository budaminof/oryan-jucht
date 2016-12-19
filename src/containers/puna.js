import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPuna } from '../actions/index';

class Puna extends Component {

  componentWillMount() {
    this.props.getPuna();
  }

  render () {
    return (
      <div>
        <h2>Puna Puna puna puna Puna!!!!</h2>
        <p>{ this.props.text.puna }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { text: state.puna };
}

export default connect( mapStateToProps, { getPuna })(Puna);
