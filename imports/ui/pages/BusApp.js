import React from "react";
import ReactDOM from 'react-dom';
import {Meteor} from "meteor/meteor";
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import BusList from "../components/bus-list";
import LivemapContainer from "./livemap-container"

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
      currentBusID: 1,
      busList:[]
    };

    this.busCollection = {};

    //this._onClickBusExecute = this._onClickBusExecute.bind(this);
  }

  _onClickBusExecute(id) {
    this.setState({currentBusID:id});
  }

  _onSelectBusExecute(id) {
    let _busList = [];

    this.busCollection[id.id] = id.state;
    _.forEach(this.busCollection, function(val, key, collection){ if(val) _busList.push(key);});
    this.setState({busList:_busList});
  }

  render() {
    var self = this;
    var mongodbFilter ={ID: {$eq: this.state.currentBusID}};
    var mongodbOptions = {sort: { timestamp: -1 }, limit: 1};

    console.log(mongodbFilter);

    return (
      <div className="flex-container-row">
        <div className="flex-item-1-row">
          <Paper zDepth={1}>
            <BusList
              data={self.props.data}
              onClickBusExecute={self._onClickBusExecute.bind(this)}
              onSelectBusExecute={self._onSelectBusExecute.bind(this)}/>
          </Paper>
        </div>
        <div className="flex-item-2-row">
          <div className="leaflet-container">
              <LivemapContainer
                resourceId={Meteor.settings.public.gpsTable}
                filter={mongodbFilter}
                options={mongodbOptions}
                busData={self.props.data}
                clickBusID={this.state.currentBusID}/>
          </div>
        </div>
      </div>  
    );
  }
}

BusApp.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default BusApp;

