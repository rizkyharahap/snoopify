# Welcome to Snoopify App!

This application is used to create playlists (lists, play) containing the selected song. This app is integrated with the Spotify API, so that saved playlists can appear in the Spotify app

You can see in https://snoopify.vercel.app/

## Requirements

You need a **Spotify account** to authorize the Snoopify app

## Main Features

- **Authorization with Spotify**
  You will be redirected to the login page the first time you visit the website. Use your spotify account to login

- **Search Tracks**
  Search tracks by type in search field, you can find search fieldin Create Playlist Page. Type the keyword you want to search for and wait a moment the results will be displayed on the screen.

- **Select Tracks**
  Select your favorite track after you type the keyword in the search field. You can restore the selected track by clicking the deselect button, or the **X** icon in the Selected Tracks table.

- **Create Playlist**
  After the track is selected, we can save the playlist by filling in the playlist name and description column, then click the save button to save the playlist.
  **_Requirement_**
  -- Requires selected tracks (Otherwise an error message will appear)
  -- Name requires a minimum of 8 characters (A validation error will appear in the input field)

## Additional Features

- **See Playlist**
  You will be redirected to the playlist page when you successfully create a playlist, the page contains a list of the selected tracks. You can also see a list of playlists that you have previously created on the left side of the screen (or open the drawer if using a mobile screen).

- **Home Page**
  The Home page displays a wealth of information, New Releases displays a list of recently released albums, Categories displays a list of categories, and the featured playlist displays the current music trends.

- **See Profile**
  After logging in you can see your name and avatar at the top right of the screen.

- **Logout**
  You can find the logout button at the bottom left of the screen (open the drawer if using a mobile screen). After clicking the logout button you will be redirected to the login page.

## Technology that has been used

- **[Mantine UI Libray](https://mantine.dev/)**
  Make full use of mantine for the whole project, mantine is very easy in ui development and there are many custom hook features, very good at managing web page responsiveness.

### Desktop View

![Dekstop View](https://github.com/rizkyharahap/snoopify/blob/master/Docs/images/desktop-view.png)

### Mobile View

![Mobile View](https://github.com/rizkyharahap/snoopify/blob/master/Docs/images/mobile-view.png)

- **@Redux/toolkit**
  Use the redux toolkit to store data and share between components. The following are the features of the redux toolkit used :
  --**_RTK Query_**
  Used to retrieve data from the API (GET) and send data (POST) for application needs, the use of RTK queries that can perform caching properly is very helpful in easing the process of calling APIs, for example pagination when doing searches.

- **Testing with MSW**
  Testing with a msw server mockup to test API calls. The use of MSW in this project can be seen in testing searching, when the enter key is pressed, it will get the display you want

## Installation

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
