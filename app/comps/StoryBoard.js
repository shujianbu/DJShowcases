'use strict';

import React from 'react';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

import { ORGS } from '../data/const';
import DJTheme from '../styles/theme';

class StoryBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.parseData(this.props.data)
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DJTheme)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: this.parseData(nextProps.data)});
  }

  parseData(data) {
    var ret = {};
    ret.id = data['ID'];
    ret.title = data['Title'];
    ret.url = data['URL'];
    ret.topic = data['Categories'];
    ret.elements = data['Element tag'];
    ret.orgId = data['OrgId'];
    ret.orgen = ORGS[ret.orgId] ? ORGS[ret.orgId]['en'] : data['Organizationen'];
    ret.orgcn = ORGS[ret.orgId] ? ORGS[ret.orgId]['ch'] : '';
    ret.logo = ORGS[ret.orgId] ? ('./img/logo/' + ret.orgId + '.png') : './img/logo/default.png';
    ret.featureImage = './img/features/' + ret.id + '.png';
    return ret;
  }

  render() {
    return (
      <Card className='story-board'>
        <CardTitle className="card-title" title={this.state.data.title} />
        <CardMedia className="image-overlay" overlay={<CardTitle title={this.state.data.topic} subtitle = {this.state.data.elements}/>}>
          <div className='feature-cont' >
            <img src= {this.state.data.featureImage} className = 'feature'/>
          </div>
        </CardMedia>
        <CardHeader className='card-header'
        title = {this.state.data.orgen}
        subtitle = {this.state.data.orgcn}
        avatar = {this.state.data.logo} />
      </Card>
    );
  }
}

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
