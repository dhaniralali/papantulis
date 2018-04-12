import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Medium, Big, Small } from "./Placeholders.jsx";


class PlacesDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabActive: 0,
      imgActive: 0
    }
    this.detailFromLink = this.props.location.state.placeDetail
      // this.getPlaces = this.getPlaces.bind(this);
  }
  // getPlaceDetail() {
  //   var placeUrl = this.props.match.params.placeUrl
  //     return dispatch => {
  //         dispatch({
  //           type: "IS_LOADING",
  //           url: placeUrl
  //         });
  //         return axios({
  //         method: "GET",
  //         url: `api/places/${ placeUrl }/detail`,
  //         }).then(res => {
  //             dispatch({
  //                 type: "GET_PLACE_DETAIL",
  //                 data: res.data
  //             });
  //         });
  //     };
  // }  

  getExtraCurr() {
      return dispatch => {
          dispatch({
            id: this.detailFromLink.id ,
            type: "IS_LOADING_EXTRA_CURR",
          });
          return axios({
          method: "GET",
          url: `api/places/extra-curr/${ this.detailFromLink.id }`,
          }).then(res => {
              dispatch({
                  type: "GET_EXTRA_CURR",
                  data: res.data
              });
          });
      };
  }  

  getImages() {
    return dispatch => {
        dispatch({
          id: this.detailFromLink.id ,
          type: "IS_LOADING_PLACE_IMAGES",
        });
        return axios({
        method: "GET",
        url: `api/places/place-images/${ this.detailFromLink.id }`,
        }).then(res => {
            dispatch({
                type: "GET_PLACE_IMAGES",
                data: res.data
            });
        });
    };
}  

  componentWillMount() {
    console.log("TEST",this.props)
    this.props.dispatch(this.getExtraCurr())
    this.props.dispatch(this.getImages())
    
  }

  render() {
    var address = this.detailFromLink ? `${ this.detailFromLink.address }, ${ this.detailFromLink.district }, ${ this.detailFromLink.city }, ${ this.detailFromLink.province }`: null
    return (
      <div style={{width:'100%', height:'100%', backgroundColor:'white'}}>
        <div className="container-fluid">
          <div className="row">
              <div className="banner bg-primary" style={{height: '271px'}}>

              </div>
          </div>
        </div>
        {/* <div className="container card m-t-md">
          <div className="row">
            <div className="col-md-3">
              <div className="circle p-a-xs border-primary">
                <div className="circle w-h-80">
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <big className="text-bold">SMA GONZAGA</big>
            </div>
          </div>
        </div> */}
        <div className="container m-t-lg">
          <div className="row">
            <div className="col-md-12">
                <div className="circle p-a-xs border-primary pull-left">
                  <div className="circle w-h-80 circle-profile" style={{ display:'block', backgroundImage: `url("${this.detailFromLink.logo}")` }}>
                  </div>
                </div>
                
                <div className="m-t-s m-l-md pull-left">
                  {/* <big className="text-bold">{ this.props.placeDetail.name }</big> */}
                  {/* <medium>{ `${ this.props.placeDetail.address }, ${ this.props.placeDetail.district }, ${ this.props.placeDetail.city }, ${ this.props.placeDetail.province }` }</medium> */}
                  {/* <Medium text={this.props.placeDetail ? address : false}/> */}
                  <Big classname="text-bold" text={this.detailFromLink.name}/>
                  <Medium classname="m-t-s" text={address}/>
                  
                </div>
            </div>
          </div>
        </div>
        <div className="container m-t-lg">
          <div className="row">
            <div className="col-md-7">
              <div className="tab">
                <div className="tabs">
                  <div className={`tab-item ${ this.state.tabActive == 0 ? 'active' : '' }`} onClick={ ()=> {
                    this.setState({
                      tabActive: 0
                    })
                  }}>Tentang</div>
                  <div className={`tab-item ${ this.state.tabActive == 1 ? 'active' : '' }`} onClick={ ()=> {
                    this.setState({
                      tabActive: 1
                    })
                  }}>Review</div>
                </div>
                <div className="tab-content">
                  <medium className="text-bold m-t-md">Fasilitas</medium>
                  <Medium classname="m-t-s text-thin" text={address}/>

                  <medium className="text-bold m-t-md">Ekstra Kurikuler</medium>
                  {
                    this.props.extraCurricular ? 
                    this.props.extraCurricular.map((v,k)=>(
                      <Medium key={k} classname="text-thin m-t-s p-l-s" text={v.name}></Medium>
                      
                    ))
                    :
                    <div>
                      <div className="ph-medium loading-line m-t-s m-l-s" style={{ width:'55%' }}></div>
                      <div className="ph-medium loading-line m-t-s m-l-s" style={{ width:'45%' }}></div>
                    </div>
                    
                    
                  }

                  <medium className="text-bold m-t-md">Alumni</medium>
                  <Medium classname="m-t-s text-thin" text={address}/>
                  
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <medium className="text-bold">Foto</medium>
              {
                this.props.placeImages != false ? 
                <div className="img-carousel-container m-t-s">
                  <div className="img-main loading-line" style={{backgroundImage: `url("${this.props.placeImages[this.state.imgActive].img_url}")`}}></div>
                    <div className="img-list">
                      {
                        this.props.placeImages.map((v,k)=> (
                          <div className="img-item" style={{backgroundImage: `url("${v.img_url}")`}} onClick={()=>{
                            this.setState({
                              imgActive:k
                            })
                          }}></div>
                        ))
                      }
                    </div>
                </div>
                :
                <div className="img-carousel-container m-t-s">
                  <div className="img-main loading-line"></div>
                  <div className="img-list">
                    {
                      [0,1,2,3].map(()=> (
                        <div className="img-item loading-line"></div>
                      ))
                    }
                  </div>
              </div>
              }
            </div>
          </div>
        </div>

      </div>
    
    );
  }
}
function mapStateToProps(state) {
    return {
      extraCurricular : state.extraCurricular,
      placeImages : state.placeImages
      
    };
  }

  export default connect(mapStateToProps)(PlacesDetail)


