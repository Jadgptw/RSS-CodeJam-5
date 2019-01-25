import React, { Component } from 'react';
import L from '../../node_modules/leaflet/dist/leaflet'
import '../../node_modules/leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../../node_modules/leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('../../node_modules/leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('../../node_modules/leaflet/dist/images/marker-shadow.png')
});

class Map extends Component {
    componentDidMount(){
        //x,y coordinate of authors workplace
        let mymap = L.map('map').setView([this.props.x, this.props.y], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mymap);
        let marker = L.marker([this.props.x, this.props.y]).addTo(mymap);
        //name - authors name
        marker.bindPopup(`<b>Here it is!</b><br>This is the main place were ${this.props.name} works.`).openPopup();
    }
    render(){
        return <div id="map" style={{height:'400px', width: '400px'}}></div>
      }
    }

export default Map;