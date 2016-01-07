'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

injectTapEventPlugin();

class StoryBoard extends React.Component {

    constructor(props) {
        super(props);
        var data = this.props.data;
        this.title = data['gsx$title']['$t'];
        // TODO: finish other props
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme()
        };
    }

    render() {
        return (
            <Card className='storyBoard'>
                <CardHeader
                title={this.title}
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
                Lorem dolor sit amet, consectetur adipiscing elit.
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
