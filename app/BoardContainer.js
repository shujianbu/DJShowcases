
import $ from 'jquery';
import React from 'react';
import StoryBoard from './StoryBoard';

class BoardContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			storyBoards : [],
			filteredData: null,
			filterBy: null
		};
	}

	componentDidMount() {
		var self = this;
		// var key  = '14mhS79MAeQo09RFYR-qabU9kK_KDvEX43t08H82aZ7k';
		var key = '1NUM595ky5tMEqZ9lh5H-FVRhYPj6AmaWas_Zv584-CA/1'; // duan spreadsheet
		// var key = '1UAPFPdeBPOqDSjzUww6Y2IzbtRWKNJQCEOn9o0t2Agg'; // copy
		var url  = 'https://spreadsheets.google.com/feeds/list/' + key + '/public/values?alt=json';
		$.ajax({
			url: url,
			type: 'GET',
			crossDomain: true,
			dataType: 'jsonp',
			success: function(data) {
				var entry = data.feed.entry;
				self.setState({
					storyBoards: entry
				});
		    },
		    error: function() {
				console.error('Failed to fetch data.');
		    }
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.filter);
		console.log(this.props.filter);
		// TODO, get filters in board containers, update states
	}

	render() {
		return (
			<div>
			{this.state.storyBoards.map(function(story, ind) {
				return <StoryBoard key={ind} data={story} />;
			})}
			</div>
		);
	}
}

export default BoardContainer;