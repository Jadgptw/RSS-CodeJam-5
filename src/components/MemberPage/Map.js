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
        const { x, y } = this.props.workPlaceCoordinats;
        const { firstName, lastName } = this.props;

        const mymap = L.map('map').setView([x, y], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mymap);
        const marker = L.marker([x, y]).addTo(mymap);
        marker.bindPopup(`<b>Отметка на карте</b><br>Основное место, где работал ${firstName} ${lastName}.`).openPopup();
    }
    render(){
        return <div id="map" style={{height:'400px', width: '100%'}}>Карта с местом работы</div>
      }
    }

export default Map;