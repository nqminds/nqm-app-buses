import React from "react";
import ReactDOM from 'react-dom';
import {Meteor} from "meteor/meteor";
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import BusList from "../components/bus-list";
import BareMapData from "./bare-map-container";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

class BusApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBusID: 1
    };
    //this._onClickBusExecute = this._onClickBusExecute.bind(this);
  }

  _onClickBusExecute(id) {
    this.setState({currentBusID:id});
  }

  render() {
    var self = this;
    var mongodbFilter = {ID: {$eq: this.state.currentBusID}};
    var mongodbOptions = {sort: { timestamp: -1 }, limit: 1};

var Livemap = React.createClass({
  componentDidMount: function () {
    var map = this.map = L.map(ReactDOM.findDOMNode(this), {
      minZoom: 2,
      maxZoom: 18,
      zoom:13,
      center: [52.008778,-0.771088],
      layers: [
        L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
          })
      ],
      attributionControl: false,
    });

/*
L.circle([52.008778,-0.771088], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map).bindPopup("I am a circle.");
*/

    //map.on('click', this.onMapClick);
    var marker = new L.marker([52.008778,-0.771088]);
    marker.addTo(map);
	  marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
  },

  componentWillUnmount: function () {
    //this.map.off('click', this.onMapClick);
    this.map = null;
  },
  onMapClick: function () {
    // Do some wonderful map things...
    console.log("Map click");
  },
  render: function () {
    return (<div className='map'></div>);
  }
});

    return (
      <div className="flex-container-row">
        <div className="flex-item-1-row">
          <Paper zDepth={1}>
            <BusList  data={self.props.data} onClickBusExecute={self._onClickBusExecute.bind(this)} />
          </Paper>
        </div>
        <div className="flex-item-2-row">
          <div className="leaflet-container">
              <Livemap/>
          </div>
        </div>
      </div>  
    );
  }
}

//<BareMapData resourceId={Meteor.settings.public.gpsTable} filter={mongodbFilter} options={mongodbOptions}/>
BusApp.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default BusApp;

