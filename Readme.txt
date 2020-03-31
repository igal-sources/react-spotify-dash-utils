React Redux Hooks Spotify sample project.

This is a example to demonstrate how to use React Redux Hooks in React Project.
Hooks API is a new addition in React 16.8. They allow us to use state and other
features in React Function Component.

Libraries:
Redux - is a predictable state container for JavaScript apps.
Semantic UI React - provides UI React components.
axios - a library that helps us make http requests to external resources.
classnames - A simple JavaScript utility for conditionally joining classNames together.
i18next - is an internationalization-framework written in and for JavaScript.
          It provides you with a complete solution to localize your product from web to mobile and desktop.

Features:
Main Screen contains:
Header - handle screen name, navigate to settings, user display name and logout when clicking on user circle.
Sidebar - contains list of <Link> items works with react-router-dom.
        <Link> is the primary way to allow users to navigate around your application.
        <Link> will render a fully accessible anchor tag with the proper href.

AppRoutes - contains routes to all screens.
Footer - contains Spotify web Player.

Application screens:
        Home - contains: Recently Played, popular Playlists, Top Artists, Top Tracks, New Releases and Recommendations.
        Search - Search for artists, albums and playlists (hit enter when done).
        Albums - All current users saved albums.
        Artists - All user followed artists.
        Playlists - All current users playlists.

Settings - contains user profile details and change language components.


All component written as functional components.
React Hooks to manage the component lifecycle.
The project connect to Spotify API with axios library


Installation:
Github link - https://github.com/igal-sources/react-spotify-dash-utils

git clone https://github.com/igal-sources/react-spotify-dash-utils.git
run npm install - to create all node_modules.
run npm start (make sure that the app is running under http://localhost:3000).
