'use strict';

import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import FiltersSection from './FiltersSection.js';
import StoryBoard from './StoryBoard';

class BoardContainer extends React.Component {

	componentDidMount() {
		var key = '14mhS79MAeQo09RFYR-qabU9kK_KDvEX43t08H82aZ7k';
		var url = 'https://spreadsheets.google.com/feeds/list/' + key + '/od6/public/values?alt=json';
		$.ajax({
		    url: url,
		    type: 'GET',
		    crossDomain: true,
		    dataType: 'jsonp',
		    success: function(data) { 
		        var entry = data.feed.entry;
		        console.log(entry);
		        // TODO: push data to this.props.storyboards
		    },
		    error: function() { 
		        console.error('Failed to fetch data.');
		    }
		});		
	}

	render() {

		// TODO, get data in componentDidMount
		var storyboards = [];
		for (var i = 0; i < 3; i++) {
		  storyboards.push(<StoryBoard key={i}/>);
		}

		return (
		   <div>
		   	{storyboards.map(function(story, ind) {
          		return <StoryBoard key={ind} classname="" />;
        	})}
		   </div>
		);
	}
}

ReactDOM.render(<FiltersSection />, document.getElementById('nav'));
ReactDOM.render(<BoardContainer />, document.getElementById('body'));
