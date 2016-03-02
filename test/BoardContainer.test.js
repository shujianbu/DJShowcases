import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import BoardContainer from '../app/BoardContainer';

function shallowRender(Component, props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props}/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('BoarderContainer should render story boards', function () {
    const mockData = [{
      'Author': '',
      'Categories': '',
      'Element tag': 'multi-media, interactive',
      'ID': '0030009',
      'OrgId': '3',
      'Organizationen': 'NPR',
      'Publication Date': '12/23/2014',
      'Title': 'Demolished: The End Of Chicago\'s Public Housing',
      'URL': 'http://apps.npr.org/lookatthis/posts/publichousing/'
    }];
    const bdCtn = shallowRender(BoardContainer, {data: mockData});
    expect(bdCtn.props.children.length).to.equal(1);
  });
});
