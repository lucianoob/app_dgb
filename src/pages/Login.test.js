import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('Login Test', async () => {
  const { queryAllByText } = render(<Login />);
  const textElement = await queryAllByText(/Login/i);
  expect(textElement).toHaveLength(2);
});
