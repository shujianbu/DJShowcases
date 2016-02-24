import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
// import App from '../app/main';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('App should have two sections', function () {
    // const app = shallowRender(App);
    // component's shallow rendering has props.children
    // expect(app.props.children[0]).to.equal('FilterSection');
    // expect(app.props.children[1]).to.equal('BoardContainer');
  });
});
