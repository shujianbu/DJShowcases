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

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import { TOPICS, ORGS, TYPES } from '../data/const';
import DJTheme from '../styles/theme';

class FiltersSection extends React.Component {

  constructor(props) {
    super(props);

    var populateMenus = (data) => {
      let ret = [];
      for(var ind in data) {
        if ({}.hasOwnProperty.call(data, ind)) {
          ret.push(<MenuItem value={ind} key={ind} primaryText={data[ind].ch} />);
        }
      }
      return ret;
    };

    this.orgs   = populateMenus(ORGS);
    this.topics = populateMenus(TOPICS);
    this.types  = populateMenus(TYPES);

    this.state = {
      open  : false,
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

    handleOpen() {
      let stateObj = Object.assign({}, this.state);
      stateObj['open'] = true;
      this.setState(stateObj);
    }

    handleClose() {
      let stateObj = Object.assign({}, this.state);
      stateObj['open'] = false;
      this.setState(stateObj);
    }

    render() {
      const actions = [
        <FlatButton
          label="OK"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose.bind(this)}
        />
      ];

      return (
        <Toolbar className='nav-bar' style={{background:'#fafafa'}}>
          <ToolbarGroup key={0} float='left' className='dropdowns'>
            <DropDownMenu onChange={this.handleChange.bind(this, 'topic')} value={this.state.topic}>{this.topics}</DropDownMenu>
            <DropDownMenu onChange={this.handleChange.bind(this, 'org')} value={this.state.org}  >{this.orgs}</DropDownMenu>
            <DropDownMenu onChange={this.handleChange.bind(this, 'type')} value={this.state.type} >{this.types}</DropDownMenu>
          </ToolbarGroup>

          <ToolbarGroup key={1} float='right' className = 'about'>
            <FlatButton label="关于" style={{}} onTouchTap={this.handleOpen.bind(this)} />
            <Dialog
              className='aboutCont'
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose.bind(this)}
            > DJChina Showcases案例库是配合数据新闻网 2.0上线推出的一个小平台，收集数据新闻及相关行业的优秀作品集，以跟踪国外新闻编辑室以及独立工作室为主，希望提供给从业人员一个快速索引学习的平台。<br/><br/>

            平台开发还在初始阶段，欢迎通过<a href='https://github.com/shujianbu/DJShowcases/issues' target='_blank'>Github Issues</a>提交建议和<a href='http://goo.gl/forms/srbLBtEkP7' target='_blank'>Google Form</a>补充更多作品，活跃数据新闻社区
            </Dialog>
          </ToolbarGroup>

        </Toolbar>
      );

      // TODO: need to investigate this one
      // <ToolbarGroup key={2} float='right' className='searchbar'>
      //   <AutoComplete hintText='输入案例名' filter={AutoComplete.caseInsensitiveFilter} dataSource={this.props.autoCompleteData} onNewRequest={this.handleSearch.bind(this)} onUpdateInput={this.clearSearch.bind(this)} />
      // </ToolbarGroup>
    }
}

FiltersSection.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default FiltersSection;
