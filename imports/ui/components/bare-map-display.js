import React from "react";
import {Meteor} from "meteor/meteor";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class BareMapDisplay extends React.Component {
	constructor(props) {
    	super(props);
    }

	render() {
    	const position = [51.505, -0.09];
		return (
			<Map center={position} zoom={13}>
  				<TileLayer
    				url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  				/>
  				<Marker position={position}>
    				<Popup>
      					<span>A pretty CSS3 popup.<br/>Easily customizable.</span>
    				</Popup>
  				</Marker>
			</Map>
			);
	}
}

export default BareMapDisplay;