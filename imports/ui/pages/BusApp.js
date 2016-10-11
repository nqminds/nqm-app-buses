import React from "react";
import {Meteor} from "meteor/meteor";
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import BusDataList from "./bus-data-container";
import BareMapDisplay from "../components/bare-map-display"

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

class BusApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-container-row">
        <div className="flex-item-1-row">
          <Paper zDepth={1}>
            <BusDataList resourceId={Meteor.settings.public.busTable} />
          </Paper>
        </div>
        <div className="flex-item-2-row">
          <div className="leaflet-container">
              <BareMapDisplay />
          </div>
        </div>
      </div>  
    );
  }
}
export default BusApp;

