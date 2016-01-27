
import React from 'react';
import StoryBoard from './StoryBoard';
import {TOPICS, ORGS, TYPES} from './const';

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyBoards : this.props.data.slice(),
      filteredStoryBoards: this.props.data.slice()
    };
  }

  componentWillReceiveProps(nextProps) {
    var self = this;

    if(JSON.stringify(self.props.filter) !== JSON.stringify(nextProps.filter) || nextProps.search !== self.props.search) {
      var filter = nextProps.filter;
      var temp = [];
      self.state.storyBoards.forEach(function(sb) {
        var topic = sb['Categories'];
        var org   = sb['OrgId'];
        var type  = sb['Element tag'];
        var title = sb['Title'].toLocaleLowerCase();
        var flag  = true;

        if(filter !== null && filter.topic !== '0' && TOPICS[filter.topic].ch !== topic) {
          flag = false;
        }
        if(flag && filter !== null && filter.org !== '0' && filter.org !== org) {
          flag = false;
        }
        if(flag && filter !== null && filter.type !== '0' && type.indexOf(TYPES[filter.type].en) == -1) {
          flag = false;
        }
        if(flag && (nextProps.search !== self.props.search || nextProps.search !== '')) {
          if(title.indexOf(nextProps.search) == -1) {
            flag = false;
          }
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