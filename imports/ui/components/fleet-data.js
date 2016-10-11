import React from "react";
import FlatButton from "material-ui/FlatButton";
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FontIcon from "material-ui/FontIcon";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {darkBlack, blue500} from 'material-ui/styles/colors';

export default class FleetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {defaultIconType: "label_outline"};

    this._onSelectFleet = this._onSelectFleet.bind(this);
    this._onClickFleet = this._onClickFleet.bind(this);    
  }

  _onSelectFleet() {
    console.log("Fleet selected.");    
  }

  _onClickFleet() {
    console.log("Fleet clicked");
  }

  render() {
    let self = this;

    const list = _.map(this.props.data, function(d,i) {
          const avatar = 'images/'+d.Avatar;
          return <ListItem
              key={i}
              leftAvatar={<Avatar src={avatar} />}
              rightIconButton={
                <IconButton onClick = {this._onSelectFleet}>
                  <FontIcon className="material-icons" color={blue500}>{self.state.defaultIconType}</FontIcon>
                </IconButton>
              }
              primaryText={d.Name}
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>ID: {d.ID}</span><br />
                  {d.Description}
                </p>
              }
              secondaryTextLines={2}
              onClick={this._onClickFleet}
            />
    });

    return (
      <List>
        <Subheader>Fleet</Subheader>
        {list}
      </List>
    );
  }
}

FleetData.propTypes = {
  data: React.PropTypes.array.isRequired
};
