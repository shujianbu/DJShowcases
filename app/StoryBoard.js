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

    getFeature(id) {
        return './img/features/' + id + '.png';
        // return './img/features/default' + Math.ceil(Math.random() * 5) + '.png';
    }

    parseData(data) {
        var ret = {};
        ret.id = data['ID'];
        ret.title = data['Title'];
        ret.url = data['URL'];
        ret.orgen = data['Organizationen'];
        ret.cat = data['Topic'];
        ret.element = data['Categories'];
        ret.img = data['Images'];
        ret.logo = this.getLogo(ret.orgen);
        ret.featureImage = this.getFeature(ret.id);
        return ret;
    }

    render() {

        return (
            <Card className='story-board'>

                <CardTitle className="card-title" title={this.state.data.title} />

                <CardMedia className="image-overlay" overlay={<CardTitle title={this.state.data.element} subtitle = {this.state.data.cat}/>}>
                    <LazyLoad>
                    <img src= {this.state.data.featureImage} className = 'feature'/>
                    </LazyLoad>
                </CardMedia>
                <CardHeader className='card-header'
                title = {this.state.data.orgen}
                subtitle = '媒体名字'
                avatar = {this.state.data.logo} />

            </Card>
        );
    }
};

StoryBoard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default StoryBoard;
