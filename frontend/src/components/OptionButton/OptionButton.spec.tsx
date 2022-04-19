import { fireEvent, render, screen } from '@testing-library/react';
import { OptionButton } from './index';

describe('OptionButton Component', () => {
  const handleActiveButtonMock = jest.fn();

  it('renders correctly', () => {
    render(
      <OptionButton
        buttonTitle="botão1"
        handleActiveButton={handleActiveButtonMock}
        buttonActive={null}
      />,
    );

    expect(screen.getByText('botão1')).toBeInTheDocument();
  });

  it('has active class', () => {
    const { getByText } = render(
      <OptionButton
        buttonTitle="botão1"
        handleActiveButton={handleActiveButtonMock}
        buttonActive="botão1"
      />,
    );

    expect(getByText('botão1')).toHaveClass('active');
  });

  it('has no active class', () => {
    const { getByText } = render(
      <OptionButton
        buttonTitle="botão1"
        handleActiveButton={handleActiveButtonMock}
        buttonActive="botão2"
      />,
    );

    expect(getByText('botão1')).not.toHaveClass('active');
  });

  it('has called with handleActiveButton function', () => {
    const { getByText } = render(
      <OptionButton
        buttonTitle="botão1"
        handleActiveButton={handleActiveButtonMock}
        buttonActive="botão2"
      />,
    );

    expect(getByText('botão1')).not.toHaveClass('active');
    fireEvent.click(getByText('botão1'));
    expect(handleActiveButtonMock).toHaveBeenCalledWith('botão1');
  });
});
