import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator Component', () => {
  it('renders without crashing', () => {
    render(<Calculator />);
  });

  it('Calculator JUROS COMPOSTO components can be used properly', () => {

    const { getByLabelText, getByText } = render(<Calculator />);
  
    // Simulate user input
    fireEvent.change(getByLabelText('Valor inicial'), { target: { value: '1000' } });
    fireEvent.change(getByLabelText('Taxa de juros'), { target: { value: '0.1' } });
    fireEvent.change(getByLabelText('Tempo'), { target: { value: '5' } });
    
    // Select 'Composto' type
    fireEvent.click(getByText('Composto'));

    // Click the calculate button
    fireEvent.click(getByText('Calcular'));

    
  });

  it('Calculator JUROS SIMPLES components can be used properly', () => {
    const { getByLabelText, getByText } = render(<Calculator />);  

    // Simulate user input
    fireEvent.change(getByLabelText('Valor inicial'), { target: { value: '1000' } });
    fireEvent.change(getByLabelText('Taxa de juros'), { target: { value: '0.1' } });
    fireEvent.change(getByLabelText('Tempo'), { target: { value: '5' } });
    
    // Select 'Simples' type
    fireEvent.click(getByText('Simples'));

    // Click the calculate button
    fireEvent.click(getByText('Calcular'));

  });
});