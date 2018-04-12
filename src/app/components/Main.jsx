import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

class Main extends Component {

  constructor(props) {
    super(props);
      // this.getPlaces = this.getPlaces.bind(this);

    }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    
    );
  }
}
function mapStateToProps(state) {
    return {
      list : state.places.list
    };
  }

  export default connect(mapStateToProps)(Main)


