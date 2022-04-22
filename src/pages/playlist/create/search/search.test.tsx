import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fakeSearchTracks } from 'mocks/data/searchs';
import { renderWithProviders } from 'utils/testUtilts';
import Search from './index';

const preloadedState = {
  auth: {
    token: 'fake-access-token',
    token_type: 'Bearer',
    expired_at: 600000000000000,
  },
};

describe('Search Track', () => {
  test('should render input correctly', () => {
    renderWithProviders(<Search />);

    const searchElm = screen.getByPlaceholderText(/Search tracks here/i);

    expect(searchElm).toBeInTheDocument();
  });

  test('should input a value', async () => {
    renderWithProviders(<Search />);

    const searchElm = screen.getByPlaceholderText(/Search tracks here/i);

    userEvent.type(searchElm, 'test');

    expect(searchElm).toHaveValue('test');
  });

  test('should render track list when search', async () => {
    renderWithProviders(<Search />, { preloadedState });

    const searchElm = screen.getByPlaceholderText(/Search tracks here/i);

    userEvent.type(searchElm, 'test{enter}');

    const nameText = await screen.findByText(
      fakeSearchTracks.tracks.items[0].name,
    );

    expect(nameText).toBeTruthy();
  });

  test('should disabled button after select track', async () => {
    renderWithProviders(<Search />, { preloadedState });

    const searchElm = screen.getByPlaceholderText(/Search tracks here/i);

    userEvent.type(searchElm, 'test{enter}');

    const buttonSelect = await screen.findByText(/select/i);

    expect(buttonSelect).toBeInTheDocument();

    userEvent.click(buttonSelect);

    const buttonDeselect = await screen.findByText(/deselect/i);

    expect(buttonDeselect).toBeInTheDocument();
  });
});
