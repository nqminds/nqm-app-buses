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
    _.forEach(this.busCollection, function(val, key, collection){ if(val) _busList.push(Number(key));});
    this.setState({busList:_busList});
  }

  render() {
    const appBarHeight = Meteor.settings.public.showAppBar !== false ? 50 : 0;
    const leftPanelWidth = 300;
    const styles = {
      root: {
        height: "100%"
      },
      leftPanel: {
        position: "fixed",
        top: appBarHeight,
        bottom: 0,
        width: leftPanelWidth
      },
      mainPanel: {
        position: "absolute",        
        top: appBarHeight,
        bottom: 0,
        left: leftPanelWidth,
        right: 0
      }
    };
    var self = this;
    var mongodbFilter = {ID: {$in: this.state.busList}};
    
    return (
        <div style={styles.root}>
          <div style={styles.leftPanel}>
            <BusList
              data={self.props.data}
              onClickBusExecute={self._onClickBusExecute.bind(this)}
              onSelectBusExecute={self._onSelectBusExecute.bind(this)}/>
          </div>
          <div style={styles.mainPanel}>
              <LivemapContainer
                resourceId={Meteor.settings.public.gpsTableLatest}
                filter={mongodbFilter}
                busData={self.props.data}
                clickBusID={this.state.currentBusID}/>
          </div>
      </div>  
    );
  }
}

BusApp.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default BusApp;

