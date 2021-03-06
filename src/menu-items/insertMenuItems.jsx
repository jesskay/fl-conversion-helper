import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MenuItems from './MenuItems';

export default function insertMenuItems({ store }) {
  // NOTE: This selector currently finds the correct nav, but that
  // may change at any point
  const parent = document.querySelector('.possessions nav');
  if (!parent) {
    return;
  }
  const container = createContainer();
  parent.insertBefore(container, parent.firstChild);
  ReactDOM.render(
    <Provider store={store}>
      <MenuItems />
    </Provider>,
    container,
  );
}

function createContainer() {
  const container = document.createElement('ol');
  container.classList.add('list-roman', 'flch-sidebar-container');
  return container;
}
