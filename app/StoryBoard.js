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

import {ORGS} from './const';

injectTapEventPlugin();

class StoryBoard extends React.Component {

    constructor(props) {
        super(props);
        var data = this.props.data;
        // console.log(data);
        this.title = data['gsx$title']['$t'];
        this.url = data['gsx$url']['$t'];
        this.orgen = data['gsx$authororganizationen']['$t'];
        this.orgcn = data['gsx$authororganizationcn']['$t'];
        this.region = data['gsx$authororganizationregion']['$t'];
        this.cat = data['gsx$categories']['$t'];
        this.cttregion = data['gsx$contentregion']['$t'];
        this.ctttag = data['gsx$contenttag']['$t'];
        this.dtsource = data['gsx$datasource']['$t'];
        this.notes = data['gsx$editornotes']['$t'];
        this.element = data['gsx$elementtag']['$t'];
        this.img = data['gsx$images']['$t'];
        this.ipdate = data['gsx$inputdate']['$t'];
        this.lg = data['gsx$languagetag']['$t'];
        // this.shareby = data['gsx$sharedby']['$t'];
        // this.source = data['gsx$source']['$t'];
        this.logo = getLogo(this.orgen);
        this.takeaways = data['gsx$takeaways']['$t'];

        function getLogo(name) {
            for(let i = 0; i < ORGS.length; i++) {
                if(ORGS[i].label.indexOf(name) !== -1) {
                    return './img/logo/' + ORGS[i].value + '.png';
                }
            }
            return './img/logo/default.png';
        }
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme()
        };
    }

    render() {
        // TODO 1: feature image 2: hyperlinks 3: texts
        // console.log(this);
        return (
            <Card className='storyBoard'>

                <CardHeader
                title= {this.orgen}
                subtitle= ''
                className = "titleText"
                avatar={this.logo} />

                <CardMedia overlay={<CardTitle className = 'imgOverlay' title={this.element} subtitle={this.cat}/>}>
                    <img src="http://lorempixel.com/600/337/nature/"/>
                </CardMedia>

                <CardTitle title={this.title} subtitle={this.orgcn}/>
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
