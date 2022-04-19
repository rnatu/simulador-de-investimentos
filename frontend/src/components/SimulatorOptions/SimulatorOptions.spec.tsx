import { render } from '@testing-library/react';
import { SimulatorOptions } from '.';

describe('SimulatorOptions Component', () => {
  const handleOptionMock = jest.fn();

  it('renders correctly', () => {
    const { getByRole } = render(
      <SimulatorOptions
        title="Rendimento"
        buttonsTitle={['Button test 1', 'Button test 2']}
        defaultButton="Button test 2"
        handleOption={handleOptionMock}
      />,
    );

    expect(getByRole('heading', { name: 'Rendimento' }));
    expect(getByRole('img', { name: /informação sobre rendimento/i }));
    expect(getByRole('button', { name: 'Button test 1' }));
    expect(getByRole('button', { name: 'Button test 2' }));
  });
});
