import React from 'react';

import { configure, storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-router';

import providerUsers from 'stateProviders/provideUser';

global.gapi = {
  load: () => {},
};

const req = require.context(
  '../src/components',
  true,
  /\.stories\.(js|ts|tsx)$/,
);

const StateProviders = providerUsers(({ children }) => children);

addDecorator(storyFn => <StateProviders>{storyFn()}</StateProviders>);
addDecorator(StoryRouter());

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
