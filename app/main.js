'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FiltersSection from './FiltersSection';
import BoardContainer from './BoardContainer';
import data from './data.csv';

class APP extends React.Component {
  constructor() {
    super()
    this.state = {filter: null, search: ''};

    var autoCompleteData = [];
    data.forEach(function(d) {
      autoCompleteData.push(d['Title']);
    });
    this.autoCompleteData = autoCompleteData;
  }

  handleFilterUpdate(obj) {
    this.setState({filter: obj});
  }

  handleSearch(str) {
    this.setState({search: str});
  }

  render() {
    return (
      <div>
        <FiltersSection autoCompleteData={this.autoCompleteData} updateFilter={this.handleFilterUpdate.bind(this)} updateSearch={this.handleSearch.bind(this)} />
        <BoardContainer data={data} filter={this.state.filter} search={this.state.search}/>
      </div>
    );
  }
}

ReactDOM.render(<APP />, document.getElementById('body'));