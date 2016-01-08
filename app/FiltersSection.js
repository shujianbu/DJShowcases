'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import {TOPICS, ORGS, TYPES, YEARS} from './filtersConst';

injectTapEventPlugin();

class FiltersSection extends React.Component {

	constructor(props) {
		super(props);

		this.topics = populateMenus(TOPICS);
		this.orgs = populateMenus(ORGS);
		this.types = populateMenus(TYPES);
		this.years = populateMenus(YEARS);

		function populateMenus(data) {
			let ret = [];
			for (let i = 0; i < data.length; i++ ) {
				ret.push(<MenuItem value={data[i].value} key={i} primaryText={data[i].label} />);
			}
			return ret;
		}

		this.state = {
			topic : null,
			org   : null,
			type  : null,
			year  : null
		};
	}

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme()
        };
    }

    handleChange (e, index, value) {
      console.log(e, index, value);
      // TODO: set state and propogate to parent
    }

    render() {
        return (
        <Toolbar style={{background:'#fafafa'}}>
            <ToolbarGroup key={0} float="left" className="dropdowns">
                <DropDownMenu onChange={this.handleChange} value='1'>{this.topics}</DropDownMenu>
                <DropDownMenu onChange={this.handleChange} value='1'>{this.orgs}</DropDownMenu>
                <DropDownMenu onChange={this.handleChange} value='1'>{this.types}</DropDownMenu>
                <DropDownMenu onChange={this.handleChange} value='1'>{this.years}</DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup key={1} float="right" className="searchbar">
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
