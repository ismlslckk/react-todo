import { render, screen, fireEvent } from '@testing-library/react';
import reactTestRenderer from 'react-test-renderer';
import Button from '@/components/atoms/Button';

describe('button component tests', () => {
  test('expect button rendered', () => {
    render(<Button color="primary">button</Button>);
    const button = screen.getByRole('button');

    expect(button).not.toBeNull();
  });

  test('expect button click event fired', () => {
    const handleClick = jest.fn();

    render(<Button color="primary" onClick={handleClick}>button</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('expect button color rendered correctly', () => {
    const button:any = render(<Button className="primary">button</Button>);

    expect(button.container.firstChild.classList.contains('primary')).toBe(true);
  });

  test('renders correctly', () => {
    const tree = reactTestRenderer
      .create(<Button type="button">Test Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
