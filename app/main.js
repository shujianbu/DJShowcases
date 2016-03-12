'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import FiltersSection from './comps/FiltersSection';
import BoardContainer from './comps/BoardContainer';

import css from './styles/main.css';
import data from './data/data.csv';

injectTapEventPlugin();

class APP extends React.Component {
  constructor() {
    super()
    this.state = {filter: null, search: ''};

    var autoCompleteData = [];
    data.forEach(function(d) {
      autoCompleteData.push(d['Title']);
    });
    data.sort(function(a, b) {
      var da = new Date(a['Publication Date']);
      var db = new Date(b['Publication Date']);
      return (da - db) || 0;
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