import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    // The render method of RTL renders the <App /> component and returns an object which is de-structured for the getByText query.
  const { getByText } = render(<h1>projects</h1>);
  // getByText looks for the text inside a node
  const linkElement = getByText(/projects/i);
  expect(linkElement).toBeInTheDocument();
});