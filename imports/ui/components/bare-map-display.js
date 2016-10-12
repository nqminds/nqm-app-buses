import React from "react";
import {Meteor} from "meteor/meteor";
import L from 'leaflet';

import { Map, Marker, Popup, TileLayer, Icon } from "react-leaflet";

class BareMapDisplay extends React.Component {
	constructor(props) {
    	super(props);
    }

	render() {
    	const position = [this.props.data[0].lat, this.props.data[0].lon];
		const busIcon = L.icon({iconUrl: 'images/bus.png', iconSize: [32, 32],});
		
		const listMarker = _.map(this.props.data, function(d,i) {
			return <Marker key={i}
						position={[d.lat, d.lon]}
						clickable='true'
						icon={busIcon}
						title='Test'
						draggable='true'
					>
    				<Popup>
      					<span>A pretty CSS3 popup.<br/>Easily customizable.</span>
    				</Popup>
  				</Marker>
		});

		return (
			<Map center={position} zoom={18}>
  				<TileLayer
    				url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  				/>
				{listMarker}
			</Map>
			);
	}
}

BareMapDisplay.propTypes = {
	//position: React.PropTypes.number.isRequired,
  	data: React.PropTypes.array.isRequired
};

BareMapDisplay.defaultProps = {
	//data:[{ID:1, timestamp:0, lat:52.008778, lon:-0.771088, ele:170}]
	data:[{ID:1, timestamp:0, lat:51.5, lon:-0.1, ele:170}]
}

export default BareMapDisplay;