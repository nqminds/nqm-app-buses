import React from "react";
import {Meteor} from "meteor/meteor";
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FleetDataList from "./fleet-data-container";
import BareMapDisplay from "../components/bare-map-display"

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

class FleetApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-container-row">
        <div className="flex-item-1-row">
          <Paper zDepth={1}>
            <FleetDataList resourceId={Meteor.settings.public.fleetTable} />
          </Paper>
        </div>
        <div className="flex-item-2-row">
          <Paper zDepth={1}>
            <Table>
              <TableHeader>  
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Date</TableHeaderColumn>
                  <TableHeaderColumn>Duration</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>123</TableRowColumn>
                    <TableRowColumn>34</TableRowColumn>
                    <TableRowColumn>Done</TableRowColumn>
                    </TableRow>
                </TableBody>  
            </Table>
          </Paper>
          <div className="leaflet-container">
              <BareMapDisplay />
          </div>
        </div>
      </div>  
    );
  }
}
export default FleetApp;

