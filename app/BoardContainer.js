
import React from 'react';
import StoryBoard from './StoryBoard';
import {TOPICS, ORGS, TYPES, YEARS} from './const';

class BoardContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			storyBoards : [],
			filteredStoryBoards: [],
			filterBy: null
		};
	}

	componentDidMount() {
		var self = this;
		// var key  = '14mhS79MAeQo09RFYR-qabU9kK_KDvEX43t08H82aZ7k';
		var key = '1NUM595ky5tMEqZ9lh5H-FVRhYPj6AmaWas_Zv584-CA/1'; // duan spreadsheet
		// var key = '1UAPFPdeBPOqDSjzUww6Y2IzbtRWKNJQCEOn9o0t2Agg'; // copy
		var url  = 'https://spreadsheets.google.com/feeds/list/' + key + '/public/values?alt=json';

		// AJAX call
		var r = new XMLHttpRequest();
		r.open("GET", url, true);
		r.onreadystatechange = function () {
			if (r.readyState != 4 || r.status != 200) return;
			// console.log("Success: ", JSON.parse(r.responseText));
			var data = JSON.parse(r.responseText);
			var entry = data.feed.entry;
			self.setState({
				storyBoards: entry.slice(),
				filteredStoryBoards: entry.slice()
			});
		};
		r.send();
	}

	componentWillReceiveProps(nextProps) {

		if(JSON.stringify(this.props.filter) !== JSON.stringify(nextProps.filter)) {
			console.log('value changed');
			var filter = nextProps.filter;
			var temp = [];
			this.state.storyBoards.forEach(function(sb) {
				var topic = sb['gsx$categories']['$t'];
				var org   = sb['gsx$authororganizationen']['$t'];
				var type  = sb['gsx$elementtag']['$t'];
				var year  = '';
				if(topic == TOPICS[filter.topic - 1].label && org == ORGS[filter.org - 1].label) {
					temp.push(sb);
				}
			});
			console.log(temp);
			this.setState({filteredStoryBoards: temp});
		}
	}

	render() {
		return (
			<div>
			{this.state.filteredStoryBoards.map(function(story, ind) {
				return <StoryBoard key={ind} data={story} />;
			})}
			</div>
		);
	}
}

export default BoardContainer;