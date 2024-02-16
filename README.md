# NewsProfileApp

**NewsProfileApp** is a React Native application designed to emulate a user profile page similar to Instagram, but specifically for news enthusiasts. This app showcases a user's personal information, their published news articles, and their bookmarked or liked stories, all built using Expo, React Native, NativeBase, and React Navigation.

# HomeScreen

![HomeScreen](https://github.com/thirumeniram/NewsProfileApp/assets/66516937/21832b7b-c125-4ccf-8441-95ffc6315692)

# Profile Screen - Posted Articles 

![Posted Article Tab](https://github.com/thirumeniram/NewsProfileApp/assets/66516937/00aee56d-f29c-4e0e-a452-3d10842863a8)

# Profile Screen - Bookmarked Articles 

![Bookmark Tab](https://github.com/thirumeniram/NewsProfileApp/assets/66516937/ace9d714-e536-4d63-b434-471ae99a1d1e)

# Settings Screen

![Settings Screen](https://github.com/thirumeniram/NewsProfileApp/assets/66516937/67c31ce1-8d1a-4803-8263-002f5db3c213)


## Features

**User Information Section**
- Displays the user's avatar, name, and a short biography, utilizing NativeBase's `Avatar` and `Text` components for a sleek presentation.

**Tabs for Content Organization**
- Incorporates tabs to differentiate between the user's posted news articles and bookmarked/liked stories. This is achieved through either NativeBase's `Tab` component or React Navigation's tab navigators, ensuring an organized and intuitive user interface.

**News Cards**
- Each news article, whether posted or bookmarked, is represented as a card displaying the article's title, an excerpt, and a thumbnail image, using NativeBase's `Card` component for a consistent and engaging layout.

**Settings Icon**
- Features an icon for navigating to a settings page, laying the groundwork for further navigation implementation within the app.

## Functionality

**Navigation**
- Employs React Navigation to facilitate movement between the profile page and other placeholder screens, demonstrating the app's navigational capabilities.

## Integration with **NewsAPI**

- Fetches **REAL NEWS ARTICLES** using **NewsAPI**, providing **DYNAMIC CONTENT** to the app and enhancing the user experience with up-to-date news stories.


## Installation Guide

**Clone the repository:**
- Open your terminal and navigate to the desired directory for your project.
- Clone the repository using Git: `git clone https://github.com/thirumeniram/NewsProfileApp`

**Install dependencies:**
- Navigate to the root directory of your cloned project in your terminal.
- Install the required dependencies by running: `npm install`

**Run the app:**
- In your terminal, run the app with: `npx expo start`

