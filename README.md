# MERN-Talent Platform

This is a Talent Platform where people can list themselves and companies can choose potential candidates from. This serves as a self-developed project for practicing and learning purpose

The back-end API is built using [Node.js](https://nodejs.org/) + [Express](http://expressjs.com/).

The front-end is built using [React.js](https://github.com/facebook/create-react-app) + [Redux](https://redux.js.org/)

Database is MongoDB hosted on [Mlab](https://mlab.com/)

## Dependencies

Please follow the official documentation of Node.js,Express and create-react-app for installation. Then to install the necessary NPM modules:

```sh
npm install
```

## Running

Run both back-end server and client side server as follow:

```sh
npm run dev
```

By default the back-end is available at http://localhost:5000 and the client side is available at http://localhost:3000. To change the port number, set it to the value of the environment variable `PORT`, e.g.

```sh
PORT=8080 node server.js
```

## API documentation

The application is a social network of job seekers and designed to connect job seekers together. Everyone can create a profile, update biography, education, experience, list skills. Especially, the appication use Github OAuth API to list out repositories of user once github username is provided. This helps job seekers who are developers to showcase their portfolio.

Users can also create posts to let others know if there is a open position somewhere, or ask a question, or share opinions about something. Others can comment and like the post.

More features are developed.
