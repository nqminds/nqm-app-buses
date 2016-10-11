import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {darkBlack,grey400, green100, green500, green700, blue500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ActionInfo from 'material-ui/svg-icons/action/info';
import FontIcon from 'material-ui/FontIcon';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
  }, {
  avatar: {
    borderColor: null,
  },
  userAgent: navigator.userAgent,
  appBar: {
    height: 50,
  },
});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  page: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
};

const iconStyles = {
  marginRight: 24,
};

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
    onClick = {()=>(console.log("Button click"))}
  >
    <ActionInfo />
  </IconButton>
);

const rightIconMenu = (
    <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
      <ActionGrade />
    </IconButton>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {defaultIconType: "label_outline"};
  }

  handleSettingsMenu(event) {
    console.log("Settings menu");
  }

  handleLogoutMenu(event) {
    console.log("Log out menu");
  }

  handleIconClick() {
    console.log("Icon click");
    this.setState({defaultIconType:"label"});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.root}>
        <AppBar
          title="NQM Fleet Management"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
            <IconMenu
              iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Settings" onClick = {this.handleSettingsMenu.bind(this)}/>
              <MenuItem primaryText="Log out" onClick = {this.handleLogoutMenu.bind(this)}/>
            </IconMenu>            
          }
        />
        <div>
          <Paper style={styles.paper} zDepth={1}>
          <List>
            <Subheader>General</Subheader>
            <ListItem
              primaryText="Show your status"
              secondaryText="Your status is visible to everyone you use with"
            />
            <ListItem
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              rightIconButton={
                <IconButton onClick = {this.handleIconClick.bind(this)}>
                  <FontIcon className="material-icons" color={green500}>{this.state.defaultIconType}</FontIcon>
                </IconButton>
              }
              primaryText="Raquel Parrado"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Recipe to try</span><br />
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2}
              onClick={()=>(console.log("List item click!"))}
            />
          </List>
          </Paper>
        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}