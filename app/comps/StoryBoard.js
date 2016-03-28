'use strict';

import React from 'react';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import styles from 'material-ui/lib/styles';

import { ORGS } from '../data/const';
import DJTheme from '../styles/theme';

const colorsArr = [styles.Colors.amber500, styles.Colors.brown400, styles.Colors.blueGrey500, styles.Colors.pink400, styles.Colors.green500,
  styles.Colors.teal500, styles.Colors.blue300, styles.Colors.indigo400, styles.Colors.purple500, styles.Colors.red500];
const greyCol = styles.Colors.grey200;

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

  getLogo(id, name) {
    if(ORGS[id]) {
      return './img/logo/' + id + '.png';
    } else {
      var cap = name.charAt(0).toUpperCase();
      var num = Math.floor(Math.random() * 10);
      return <Avatar color={greyCol} backgroundColor={colorsArr[num]} size={25}>{cap}</Avatar>;;
    }
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
    ret.logo = this.getLogo(ret.orgId, ret.orgen);
    ret.featureImage = './img/features/' + ret.id + '.png';
    return ret;
  }

  render() {
    return (
      <a href={this.state.data.url} target="_blank">
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
      </a>
    );
  }
}

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
