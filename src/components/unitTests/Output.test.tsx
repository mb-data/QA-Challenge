import React from 'react';
import { render, screen } from '@testing-library/react';


import Output from "../Output";

test('should render correctly the OUTPUT components', () => {
  const valor = 42;
  render(<Output value={valor} />);

  expect(screen.getByText('Resultado:'))


});


