import { render } from '@testing-library/react';
import reactTestRenderer from 'react-test-renderer';
import Checkbox from '.';

describe('checkbox component tests', () => {
  test('expect type should be checkbox', async () => {
    const checkbox:any = render(<Checkbox />);

    expect(checkbox.container.firstChild.firstChild).toHaveProperty('type', 'checkbox');
  });

  test('expect checkbox should be readOnly', async () => {
    const checkbox:any = render(<Checkbox readOnly />);

    expect(checkbox.container.firstChild.firstChild).toHaveProperty('readOnly');
  });

  test('expect checkbox should be disable', async () => {
    const checkbox:any = render(<Checkbox disabled />);

    expect(checkbox.container.firstChild.firstChild).toHaveProperty('disabled');
  });

  it('renders correctly', () => {
    const tree = reactTestRenderer
      .create(<Checkbox id="1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
