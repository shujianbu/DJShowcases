'use strict';

var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var Paper = mui.Paper;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var ToolbarTitle = mui.ToolbarTitle;
var ToolbarSeparator = mui.ToolbarSeparator;
var DropDownMenu = mui.DropDownMenu;
var FontIcon = mui.FontIcon;
var DropDownIcon = mui.DropDownIcon;
var TextField = mui.TextField;
var RaisedButton = mui.RaisedButton;

let topics = [
  { payload: '1', text: 'Politics' },
  { payload: '2', text: 'Economy' },
  { payload: '3', text: 'Business' },
  { payload: '4', text: 'Tech' },
  { payload: '5', text: 'Arts' },
  { payload: '6', text: 'Sports'}
];

let organizations = [
  { payload: '1', text: 'The New York Times' },
  { payload: '2', text: 'The Guardian' },
  { payload: '3', text: 'NPR' },
  { payload: '4', text: 'ProPublica' },
  { payload: '5', text: 'The Wall Street Journal' },
  { payload: '6', text: 'Washington Post'}
];

let years = [
  { payload: '1', text: '2015' },
  { payload: '2', text: '2014' }
];

var FiltersSection = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <Toolbar style={{background:'#fafafa'}}>
        <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems={topics} />
          <DropDownMenu menuItems={organizations} />
          <DropDownMenu menuItems={years} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <TextField hintText="Search" />
          <FontIcon className="material-icons">search</FontIcon>
        </ToolbarGroup>
      </Toolbar>

    );
  }
});

module.exports = FiltersSection;
