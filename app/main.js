'use strict';
import React from 'react';
import FiltersSection from './FiltersSection.js';
import StoryBoard from './StoryBoard';

React.render(<FiltersSection />, document.getElementById('nav'));
React.render(<StoryBoard />, document.getElementById('body'));
