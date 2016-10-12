import React from "react";
import FlatButton from "material-ui/FlatButton";
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {darkBlack, blue500} from 'material-ui/styles/colors';

class BusData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultIconType: "label_outline"
    };

    this._onSelectBus = this._onSelectBus.bind(this);
    this._onClickBus = this._onClickBus.bind(this);
  }

  _onSelectBus() {
    console.log("Bus selected.");    
  }

  _onClickBus(id) {
    console.log("First ID:"+id);
    this.props.onClickBusExecute(id);
  }

  render() {
    let self = this;

    const list = _.map(this.props.data, function(d,i) {
          const avatar = 'images/bus.png';
          return <ListItem
              key={i}
              leftAvatar={<Avatar src={avatar} />}
              rightIconButton={
                <IconButton onClick = {this._onSelectBus}>
                  <FontIcon className="material-icons" color={blue500}>{self.state.defaultIconType}</FontIcon>
                </IconButton>
              }
              primaryText={d.Title}
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>ID: {d.ID}</span><br />
                  {d.Host}
                </p>
              }
              secondaryTextLines={2}
              onClick={self._onClickBus.bind(this, d.ID)}
            />
    });

    return (
      <List>
        <Subheader>Available Buses</Subheader>
        {list}
      </List>
    );
  }
}

BusData.propTypes = {
  data: React.PropTypes.array.isRequired,
  onClickBusExecute: React.PropTypes.func.isRequired
};

export default BusData;