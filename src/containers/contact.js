import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../actions/index';

class Contact extends Component {

  componentWillMount() {
    this.props.getContact();
  }

  render () {
    return (
      <div>
        <h2>TALK TO ME!!!!</h2>
        <h3>
          Phone: <span>{ this.props.text.contact.phone }</span>
        </h3>
        <h3>
          Email: <span>{ this.props.text.contact.email }</span>
        </h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { text: state.contact };
}

export default connect( mapStateToProps, { getContact })(Contact);
