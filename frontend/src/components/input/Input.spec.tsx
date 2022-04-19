import { render } from '@testing-library/react';
import { Input } from '.';

describe('Input Component', () => {
  const handleInputChangeMock = jest.fn();

  it('renders correctly', () => {
    const { getByRole, getByLabelText } = render(
      <Input
        inputName="Input Name Test"
        handleInputChange={handleInputChangeMock}
        inputStateValue="22"
      />,
    );

    expect(getByLabelText('Input Name Test')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByRole('textbox')).toHaveDisplayValue('22');
  });
});
