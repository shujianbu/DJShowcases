'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import mui from 'material-ui';

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const Card = mui.Card;
const CardHeader = mui.CardHeader;
const Avatar = mui.Avatar;
const CardMedia = mui.CardMedia;
const CardTitle = mui.CardTitle;
const CardText = mui.CardText;
const CardActions = mui.CardActions;
const FlatButton = mui.FlatButton;

class StoryBoard extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <Card style={{width: '40%'}}>
        <CardHeader
          title="Title"
          subtitle="Subtitle"
          avatar={<Avatar>A</Avatar>}/>
        <CardHeader
          title="Demo Url Based Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"/>
        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardTitle title="Title" subtitle="Subtitle"/>
        <CardActions>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
};
StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
