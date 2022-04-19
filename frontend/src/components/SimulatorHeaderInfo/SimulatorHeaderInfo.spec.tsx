import { render } from '@testing-library/react';
import { SimulatorHeaderInfo } from '.';

describe('SimulatorHeaderInfo Component', () => {
  it('renders correctly', () => {
    const { getByText, getByTitle } = render(
      <SimulatorHeaderInfo title="Title message" hoverInfoMsg="message test" />,
    );

    expect(getByText('Title message')).toBeInTheDocument();
    expect(getByTitle('message test')).toBeInTheDocument();
  });
});
