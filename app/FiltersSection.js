'use strict';

import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import AutoComplete from 'material-ui/lib/auto-complete';

import FontIcon from 'material-ui/lib/font-icon';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import { TOPICS, ORGS, TYPES } from './const';
import DJTheme from './theme';

class FiltersSection extends React.Component {

  constructor(props) {
    super(props);

    this.orgs   = populateMenus(ORGS);
    this.topics = populateMenus(TOPICS);
    this.types  = populateMenus(TYPES);

    function populateMenus(data) {
      let ret = [];
      for(var ind in data) {
        ret.push(<MenuItem value={ind} key={ind} primaryText={data[ind].ch} />);
      }
      return ret;
    }

    this.state = {
      topic : '0',
      org   : '0',
      type  : '0'
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

    handleSearch(str) {
      this.props.updateSearch(str.toLocaleLowerCase());
    }

    clearSearch(str) {
      if(str.length === 0)
        this.props.updateSearch('');
    }

    render() {

      return (
        <Toolbar className='nav-bar' style={{background:'#fafafa'}}>
          <ToolbarGroup key={0} float='left' className='dropdowns'>
            <DropDownMenu onChange={this.handleChange.bind(this, 'topic')} value={this.state.topic}>{this.topics}</DropDownMenu>
            <DropDownMenu onChange={this.handleChange.bind(this, 'org')} value={this.state.org}  >{this.orgs}</DropDownMenu>
            <DropDownMenu onChange={this.handleChange.bind(this, 'type')} value={this.state.type} >{this.types}</DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup key={1} float='right' className='searchbar'>
            <AutoComplete hintText='输入案例名' filter={AutoComplete.caseInsensitiveFilter} dataSource={this.props.autoCompleteData} onNewRequest={this.handleSearch.bind(this)} onUpdateInput={this.clearSearch.bind(this)} />
          </ToolbarGroup>
      </Toolbar>
      );

    }
};

FiltersSection.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default FiltersSection;
