import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TypeSelector from "../TypeSelector";

test("renders TypeSelector component with default value", () => {
  const onChangeMock = jest.fn();
  const { getByText } = render(<TypeSelector value="Composto" onChange={onChangeMock} />);
  
  // Assert that the component renders with the correct default value
  expect(getByText("Composto"));
  expect(getByText("Simples"));
});

test("calls onChange when Composto button is clicked", () => {
  const onChangeMock = jest.fn();
  const { getByText } = render(<TypeSelector value="Simples" onChange={onChangeMock} />);
  
  // Simulate a click on the Composto button
  fireEvent.click(getByText("Composto"));
  
  // Assert that the onChange function is called with the correct value
  expect(onChangeMock).toHaveBeenCalledWith({
    target: { value: "Composto" },
  });
});

test("calls onChange when Simples button is clicked", () => {
  const onChangeMock = jest.fn();
  const { getByText } = render(<TypeSelector value="Composto" onChange={onChangeMock} />);
  
  // Simulate a click on the Simples button
  fireEvent.click(getByText("Simples"));
  
  // Assert that the onChange function is called with the correct value
  expect(onChangeMock).toHaveBeenCalledWith({
    target: { value: "Simples" },
  });
})