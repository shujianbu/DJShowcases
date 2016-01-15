
import React from 'react';
import StoryBoard from './StoryBoard';
import {TOPICS, ORGS, TYPES} from './const';
import data from './data.csv';

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
		this.setState({
			storyBoards: data.slice(),
			filteredStoryBoards: data.slice()
		});

	}

	componentWillReceiveProps(nextProps) {

		if(JSON.stringify(this.props.filter) !== JSON.stringify(nextProps.filter)) {
			var filter = nextProps.filter;
			var temp = [];
			this.state.storyBoards.forEach(function(sb) {
				var topic = sb['Topic'];
				var org   = sb['Organization'];
				var type  = sb['Type'];

				var flag  = true;
				if(filter.topic !== '0' && TOPICS[filter.topic].label !== topic) {
					flag = false;
				}
				if(flag && filter.org !== '0' && ORGS[filter.org].label !== org) {
					flag = false;
				}
				if(flag && filter.type !== '0' && type.indexOf(TYPES[filter.type].label) == -1) {
					flag = false;
				}
				if(flag) {
					temp.push(sb);
				}
			});

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