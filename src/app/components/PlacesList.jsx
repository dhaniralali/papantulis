import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Link } from 'react-router';

import axios from 'axios';
import { connect } from "react-redux";

class PlacesList extends Component {

  constructor(props) {
    super(props);
      // this.getPlaces = this.getPlaces.bind(this);

    }

    getPlaces() {
      return dispatch => {
        return axios({
          method: "GET",
          url: `/api/places/`,
        }).then(res => {
          console.log(res)
          dispatch({
            type: "GET_PLACES",
            places: res.data
          });
        });
      };
    }  

  componentWillMount() {
    this.props.dispatch(this.getPlaces())
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
              <div className="banner bg-primary">

              </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
              {
                this.props.places.map((v, k)=>(
                  <div key={k} className="col-md-4">
                    <Link to={{ pathname: `/${v.url}`,
                              state: { placeDetail: v } 
                              }}>
                        <div className="item-card p-a-s">
                          <div className="card-img pull-left m-t-s" style={{backgroundImage: `url("${v.logo}")`}}>
                          </div>
                          <div className="card-detail pull-left p-t-s" style={{ maxWidth: '68%' }}>
                              <medium className="m-l-md text-bold">{v.name}</medium>
                              <small className="m-l-md m-t-s">{`${ v.address }, ${ v.district }, ${ v.city }, ${ v.province }`}</small>
                          </div>
                        </div>
                    </Link>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    
    );
  }
}
function mapStateToProps(state) {
    return {
      pure: false,
      places : state.places
    };
  }

  export default connect(mapStateToProps)(PlacesList)


