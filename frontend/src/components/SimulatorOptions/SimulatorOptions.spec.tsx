import { render } from '@testing-library/react';
import { SimulatorOptions } from '.';

describe('SimulatorOptions Component', () => {
  const handleOptionMock = jest.fn();

  const { getByRole } = render(
    <SimulatorOptions
      title="Rendimento"
      buttonsTitle={['Button test 1', 'Button test 2']}
      defaultButton="Button test 2"
      handleOption={handleOptionMock}
    />,
  );

  it('renders correctly', () => {
    expect(getByRole('heading', { name: 'Rendimento' }));
    expect(getByRole('button', { name: 'Button test 1' }));
    expect(getByRole('button', { name: 'Button test 2' }));
  });
});
