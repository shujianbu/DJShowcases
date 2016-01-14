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

import {TOPICS, ORGS, TYPES, YEARS} from './const';
import DJTheme from './theme';

injectTapEventPlugin();

class FiltersSection extends React.Component {

	constructor(props) {
		super(props);

		this.topics = populateMenus(TOPICS);
		this.orgs   = populateMenus(ORGS);
		this.types  = populateMenus(TYPES);
		this.years  = populateMenus(YEARS);

		function populateMenus(data) {
			let ret = [];
			for (let i = 0; i < data.length; i++ ) {
				ret.push(<MenuItem value={data[i].value} key={i} primaryText={data[i].label} />);
			}
			return ret;
		}

		this.state = {
			topic : '0',
			org   : '0',
			type  : '0',
			year  : '0'
		};
	}

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(DJTheme)
        };
    }

    handleChange(filter, e, index, value) {
		// set state
		let stateObj = Object.assign({}, this.state);
		stateObj[filter] = value;
		this.setState(stateObj);

		// ropogate to parent
		this.props.updateFilter(stateObj);
    }

    handleSearch(event) {
    	console.log('search:', this);
    	console.log('event: ', arguments);
    	console.log(this.refs['search'].getValue());
    }

    render() {
        return (
        <Toolbar style={{background:'#fafafa'}}>
            <ToolbarGroup key={0} float='left' className='dropdowns'>
                <DropDownMenu ref='topic' onChange={this.handleChange.bind(this, 'topic')} value={this.state.topic}>{this.topics}</DropDownMenu>
                <DropDownMenu onChange={this.handleChange.bind(this, 'org')} value={this.state.org}  >{this.orgs}</DropDownMenu>
                <DropDownMenu onChange={this.handleChange.bind(this, 'type')} value={this.state.type} >{this.types}</DropDownMenu>
                <DropDownMenu onChange={this.handleChange.bind(this, 'year')} value={this.state.year}>{this.years}</DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup key={1} float='right' className='searchbar'>
                <TextField hintText='Search' ref='search' onChange={this.handleSearch.bind(this)} value={this.state.searchValue}/>
                <FontIcon className='material-icons'>search</FontIcon>
            </ToolbarGroup>
        </Toolbar>
        );
    }
};

FiltersSection.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default FiltersSection;
