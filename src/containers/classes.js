import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../actions/index';

class Classes extends Component {

  componentWillMount() {
    this.props.getClasses();
  }

  render () {
    
    const calendarStyle = {
      style: "border: 0",
      width: "800",
      height: "600",
      frameborder: "0",
      scrolling: "no"
    }

    return (
      <div>
        <h2>TIME FOR A CLASS!!!!</h2>
        <p>{ this.props.text.classes }</p>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=budaminof%40gmail.com&ctz=America/Denver"
          style={ calendarStyle }
          >
        </iframe>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { text: state.classes };
}

export default connect( mapStateToProps, { getClasses })(Classes);
