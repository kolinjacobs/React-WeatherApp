import React, { Component } from 'react';


class GoogleMap extends Component {
  //life cycle method
  componentDidMount() {
    //cretes an imbeded google map
    //also finds this.refs.map to render the map
    console.log(this.props.lat);
    console.log(this.props.lon);
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lon)
      }
    });
  }

  render (){
    console.log();
    return <div ref="map" />; /* allows us to get a refrence to an html element */
  }
}

export default GoogleMap;
