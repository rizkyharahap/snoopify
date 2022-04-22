import { screen } from '@testing-library/react';
import { fakeFeaturedPlaylists } from 'mocks/data/featuredPlaylists';
import { fakeNewReleases } from 'mocks/data/newRealease';
import { preloadedState } from 'mocks/data/store';
import { renderWithProviders } from 'utils/testUtilts';
import HomePage from '.';

describe('Home Testing', () => {
  test('should render title correctly', () => {
    renderWithProviders(<HomePage />);

    expect(screen.getByText(/New Release/i)).toBeInTheDocument();
    expect(screen.getByText(/Categories/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Playlist/i)).toBeInTheDocument();
  });

  test('should render new release', async () => {
    renderWithProviders(<HomePage />, { preloadedState });

    const albumTitle = await screen.findByText(
      fakeNewReleases.albums.items[0].name,
    );

    expect(albumTitle).toBeTruthy();
  });

  test('should render new featured playlists', async () => {
    renderWithProviders(<HomePage />, { preloadedState });

    const albumTitle = await screen.findByText(
      fakeFeaturedPlaylists.playlists.items[0].name,
    );

    expect(albumTitle).toBeTruthy();
  });
});
