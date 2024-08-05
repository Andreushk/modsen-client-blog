## modsen-client-blog

# About

An application where users can view interesting posts from different categories.

# How to run locally

To run locally, you need to follow instructions below:

1. Clone this repository:

```
git clone https://github.com/Andreushk/modsen-client-blog.git
```

2. Install dependencies:

```
npm i
# or
yarn
```

3. Create an .env file (you must use the .env.example file from the root of project repository as example) and put there your oun keys for all APIs (you will need keys for you server with database, EmailJS and Mapbox);
4. Now you can view the commands and run the application using one of them (dev - run in development mode, build - build the production version (to run production build, you need to run start command then)):

```
npm run dev
yarn dev
# or
npm run build => npm start
yarn build => yarn start
```

5. Also this project has ability to run test (:jest - jest unit tests, :cypress - e2e cypress tests):

```
npm run test:jest
yarn test:jest
# or
npm run test:cypress
yarn test:cypress
```

# Main Functionality

- viewing posts;
- searching posts;
- viewing authors pages;
- infinity scroll;
- subscribing on email advertisements;
- contacting due contact form;
- viewing interactive map;
- loading UI;
- internationalization;

# Deploy

The app works here: [>Visit Vercel deployment<](https://modsen-client-blog-orange.vercel.app/)

# Technologies

Application technologies list:

- Next
- TypeScript
- Mapbox
- Next-intl
- React Hook Form
- YUP
- SCSS
- Jest
- Cypress
  ...also the following technologies are configured for the development process:
- Storybook
- Eslint
- Lint-staged
- Prettier
- Husky

# APIs

The app requires interaction with [EmailJS](https://www.emailjs.com/), [Mapbox](https://www.mapbox.com/) and custom custom project [json-server](https://client-blog-json-server.vercel.app/).

# App Pages Description

## Home Page

Users can explore a selection of recommended posts, feature articles and recent additions to the blog. In the "About Us" section, users can delve deeper into the mission and learn more about the team by navigating to a dedicated "About Us" page.

Users can easily navigate to the "Category" page to discover a variety of posts that match their preferences.

Also users can also get to know the author team at the "List of authors" section and go to author page to read more.

In the footer on all pages, users will find a subscription form to keep them up to date with the latest news and exclusive offers from our app.

## Blog Page

Here users can view featured post and go thru all posts using paginated list, or choose category and be redirected to the "Category" page for more interesting search of posts.

## Blog Post Page

This is simple page with selected post and some recommendation from this category of posts

## Category Page

On this page users have ability to view posts and filter them using elastic search, tags or categories.

## About Us Page

This page contains a lot of information about app and blog team.

## Contact Us Page

Here users can find information about location of team offices (using interactive map), working hours and contact information. Also on this page users have ability to contact using special contact form.

# Contributors

- [Andrei Shket](https://github.com/Andreushk);
