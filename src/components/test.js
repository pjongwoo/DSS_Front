/*global daum*/
import React, { Component } from 'react';

class test extends Component {
  componentDidMount() {      
 
                                           
    let el = document.getElementById('map');
    let map = new daum.maps.Map(el, {
      center: new daum.maps.LatLng(33.450701, 126.570667)
    });
    new daum.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: new daum.maps.LatLng(33.450701, 126.570667)
    });
  }
  render() {
    return (
      <div>
        <div className="map" id="map" style={ { width: '500px', height: '500px' ,margin: '0 auto' }}> >  </div>
      </div>
    );
  }
}

export default test;