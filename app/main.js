'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FiltersSection from './FiltersSection';
import BoardContainer from './BoardContainer';



class APP extends React.Component {
	constructor() {
		super()
		this.state = {filter: null};
	}

	handleFilterUpdate(obj) {
		this.setState({filter: obj});
	}

	render() {
		return (
			<div>
				<FiltersSection updateFilter={this.handleFilterUpdate.bind(this)} />
				<BoardContainer filter={this.state.filter} />
			</div>
			);
	}
}

ReactDOM.render(<APP />, document.getElementById('body'));