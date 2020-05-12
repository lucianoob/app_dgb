import React from 'react';
import { render } from '@testing-library/react';
import Cadastro from './Cadastro';

test('Cadastro Test', async () => {
  const { queryAllByText } = render(<Cadastro />);
  const textElement = await queryAllByText(/Cadastro/i);
  expect(textElement).toHaveLength(2);
});
