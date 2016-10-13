import React from "react";
import FlatButton from "material-ui/FlatButton";
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {darkBlack, blue500} from 'material-ui/styles/colors';

const disabledIconType = "label_outline";
const enabledIconType = "label";

class BusData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateIconType: {}//"label_outline"
    };

    this._onSelectBus = this._onSelectBus.bind(this);
    this._onClickBus = this._onClickBus.bind(this);
  }

  _onSelectBus(id) {
    let _stateIconType = this.state.stateIconType;
    let stateType = 0;
    if (this.state.stateIconType[id]===undefined) {
      _stateIconType[id] = disabledIconType;
    } else {
      if (this.state.stateIconType[id]==disabledIconType) {
        _stateIconType[id] = enabledIconType;
        stateType = 1;
      } else
        _stateIconType[id] = disabledIconType;
    }

    this.setState({stateIconType:_stateIconType});
    this.props.onSelectBusExecute({id:id, state:stateType});
  }

  _onClickBus(id) {
    this.props.onClickBusExecute(id);
  }

  render() {
    let self = this;
    let iconType;

    const list = _.map(this.props.data, function(d,i) {
          const avatar = 'images/bus.png';
          
          if (self.state.stateIconType[d.ID]===undefined)
            iconType = disabledIconType;
          else iconType = self.state.stateIconType[d.ID];

          return <ListItem
              key={i}
              leftAvatar={<Avatar src={avatar} />}
              rightIconButton={
                <IconButton onClick = {self._onSelectBus.bind(this, d.ID)}>
                  <FontIcon className="material-icons" color={blue500}>{iconType}</FontIcon>
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
  onClickBusExecute: React.PropTypes.func.isRequired,
  onSelectBusExecute: React.PropTypes.func.isRequired
};

export default BusData;