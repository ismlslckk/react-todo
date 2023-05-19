import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import reactTestRenderer from 'react-test-renderer';
import store from '@/store';
import { TodoList } from '@/pages';
import '@testing-library/jest-dom';

describe('checkbox component tests', () => {
  test('expect todo list page is rendering with todo types', async () => {
    render(<Provider store={store}><TodoList /></Provider>);

    expect(screen.queryByText('All')).toBeInTheDocument();
    expect(screen.queryByText('Active')).toBeInTheDocument();
    expect(screen.queryByText('Completed')).toBeInTheDocument();
    expect(screen.queryByText('Clear Completed')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = reactTestRenderer
      .create(<Provider store={store}><TodoList /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
