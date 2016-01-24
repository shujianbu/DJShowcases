'use strict';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

import {ORGS} from './const';
import DJTheme from './theme';

import LazyLoad from 'react-lazy-load'; // TODO: evaluate if needed.

injectTapEventPlugin();

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

    getLogo(name) {
        for(let i = 1; i < ORGS.length; i++) {
            if(ORGS[i].label.toLowerCase().indexOf(name.toLowerCase()) !== -1 || name.toLowerCase().indexOf(ORGS[i].label.toLowerCase()) !== -1) {
                return './img/logo/' + ORGS[i].value + '.png';
            }
        }
        return './img/logo/default.png';
    }

    getFeature(name) {
        return './img/features/default' + Math.ceil(Math.random() * 5) + '.png';
    }

    parseData(data) {
        var ret = {};
        ret.title = data['Title'];
        ret.url = data['URL'];
        ret.orgen = data['Organization'];
        ret.orgcn = data['Organization_CN'];
        ret.cat = data['Topic'];
        ret.element = data['Type'];
        ret.img = data['Images'];
        ret.logo = this.getLogo(ret.orgen);
        ret.featureImage = this.getFeature();
        return ret;
    }

    render() {

        return (
            <Card className='storyBoard'>

                <CardHeader
                title = {this.state.data.orgen}
                subtitle = {this.state.data.orgcn}
                className = 'titleText'
                avatar = {this.state.data.logo} />

                <CardMedia overlay={<CardTitle className = 'imgOverlay' title= {this.state.data.element} subtitle = {this.state.data.cat}/>}>
                    <LazyLoad height={220}>
                    <img src= {this.state.data.featureImage} className = 'feature'/>
                    </LazyLoad>
                </CardMedia>

                <CardTitle title={this.state.data.title} />
            </Card>
        );
    }
};

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
