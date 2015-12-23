'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import mui from 'material-ui';

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const Paper = mui.Paper;
const Toolbar = mui.Toolbar;
const ToolbarGroup = mui.ToolbarGroup;
const ToolbarTitle = mui.ToolbarTitle;
const ToolbarSeparator = mui.ToolbarSeparator;
const DropDownMenu = mui.DropDownMenu;
const FontIcon = mui.FontIcon;
const DropDownIcon = mui.DropDownIcon;
const TextField = mui.TextField;
const RaisedButton = mui.RaisedButton;

// TODO, to be removed
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

class FiltersSection extends React.Component {
    
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    //TODO: fetch data
    componentDidMount() {

    }

    render() {
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
};

FiltersSection.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default FiltersSection;
