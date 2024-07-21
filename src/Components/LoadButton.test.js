import { React } from 'react';

import { render, fireEvent } from '@testing-library/react';
import LoadButton from './LoadButton';


describe('LoadButton component', () => {
  it('calls onClick prop when clicked', () => {
    // Mock the onClick function
    const onClickMock = jest.fn();

    // Render the component with the mocked onClick function
    const { getByText } = render(<LoadButton onClick={onClickMock} />);

    // Simulate a click on the button
    fireEvent.click(getByText('Load Another Cat'));

    // Expect the onClick function to have been called once
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});