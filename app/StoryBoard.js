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
        this.logo = getLogo(this.orgen);
        this.featureImage = getFeature();
        this.takeaways = data['gsx$takeaways']['$t'];

        function getLogo(name) {
            for(let i = 0; i < ORGS.length; i++) {
                if(ORGS[i].label.indexOf(name) !== -1) {
                    return './img/logo/' + ORGS[i].value + '.png';
                }
            }
            return './img/logo/default.png';
        }

        function getFeature(name) {

            return './img/features/default' + Math.ceil(Math.random() * 5) + '.png';
        }
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme()
        };
    }

    render() {
        // TODO 1: feature image 2: hyperlinks 3: texts
        console.log(this);
        return (
            <Card className='storyBoard'>

                <CardHeader
                title = {this.orgen}
                subtitle = {this.orgcn}
                className = 'titleText'
                avatar = {this.logo} />

                <CardMedia overlay={<CardTitle className = 'imgOverlay' title= {this.element} subtitle = {this.cat}/>}>
                    <img src= {this.featureImage} />
                </CardMedia>

                <CardTitle title={this.title} />
            </Card>
        );
    }
};

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
