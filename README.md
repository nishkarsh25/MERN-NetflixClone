# MERN-NetflixClone Project

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js) along with Redux for state management and Tailwind CSS for styling. The application provides functionalities for user authentication, browsing and searching movies, and viewing movie details with trailers. It fetches movie data from The Movie Database (TMDB) API and categorizes movies into popular, now playing, top-rated, and upcoming.


## Features

### User Authentication
- **Login**: Users can log in using their email and password.
- **Registration**: New users can create an account by providing their full name, email, and password.
- **Logout**: Users can log out of their accounts.

### Movie Browsing
- **Popular Movies**: Browse a list of popular movies.
- **Now Playing Movies**: See movies that are currently playing in theaters.
- **Top Rated Movies**: Browse a list of top-rated movies.
- **Upcoming Movies**: See movies that are coming soon to theaters.

### Movie Search
- **Search Functionality**: Users can search for movies by entering keywords. The search results are displayed with movie posters.

### Movie Details
- **Movie Overview**: Display the movie title and a brief overview.
- **Movie Trailer**: Play the movie trailer directly within the application.

### Responsive Design
- **Responsive Layout**: The application is designed to be responsive and works well on different screen sizes.

## Live Demo

You can try out the live demo of the app [here](https://mern-socket-realtimechatapplicaton.onrender.com/).

## Folder Structure

```
Netflix-Clone/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── MainContainer.js
│   │   │   ├── MovieCard.js
│   │   │   ├── MovieContainer.js
│   │   │   ├── MovieDialog.js
│   │   │   ├── MovieList.js
│   │   │   ├── Register.js
│   │   │   ├── SearchMovie.js
│   │   │   ├── VideoBackground.js
│   │   │   └── VideoTitle.js
│   │   ├── hooks/
│   │   │   ├── useNowPlayingMovies.js
│   │   │   ├── usePopularMovies.js
│   │   │   ├── useTopRatedMovies.js
│   │   │   ├── useUpcomingMovies.js
│   │   │   └── useMovieById.js
│   │   ├── pages/
│   │   │   ├── Browse.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   ├── userSlice.js
│   │   │   ├── movieSlice.js
│   │   │   └── searchSlice.js
│   │   ├── utils/
│   │   │   ├── constant.js
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── .env
│   ├── package.json
│   └── ...
├── server/
│   ├── config/
│   │   ├── db.js
│   │   └── ...
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── movieController.js
│   │   └── ...
│   ├── models/
│   │   ├── User.js
│   │   └── ...
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── movieRoutes.js
│   │   └── ...
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── ...
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── ...
├── README.md
└── ...



```


## GIF's

<img src="https://github.com/nishkarsh25/MERN-NetflixClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: A library for routing in React applications.
- **React Hot Toast**: A library for showing notifications.
- **Material UI**: A popular React UI framework for building responsive applications.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database program that uses JSON-like documents with optional schemas.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

### External APIs
- **TMDB API**: The Movie Database API for fetching movie data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-NetflixClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node index.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm start
   ```
5. Start the socket Server: Launch the backend Node.js server.

   ```bash
   cd socket
   node server.js
   ```

## Usage

1. **Run the development server**:

   ```bash
   cd client
   npm start
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## How to Use:

#### User Authentication
- The login and registration forms are provided for user authentication. On successful login or registration, users are redirected to the browse page.

#### Movie Browsing
- The browse page displays categories of movies: popular, now playing, top-rated, and upcoming. Each category fetches data from the TMDB API using custom hooks.

#### Movie Search
- Users can search for movies using the search bar. The search results display movie posters and titles. Users can click on any movie to see more details.

#### Movie Details
- Clicking on a movie displays the movie's overview and plays the trailer. This is implemented using a dialog that pops up with an embedded YouTube player.



## API Endpoints

### User Authentication
- **POST /register**: Register a new user.
  - Request body: `{ "fullName": "string", "email": "string", "password": "string" }`
  - Response: `{ "success": true, "message": "User registered successfully.", "user": { "id": "string", "fullName": "string", "email": "string" } }`

- **POST /login**: Log in an existing user.
  - Request body: `{ "email": "string", "password": "string" }`
  - Response: `{ "success": true, "message": "Logged in successfully.", "user": { "id": "string", "fullName": "string", "email": "string" } }`

- **GET /logout**: Log out the current user.
  - Response: `{ "success": true, "message": "Logged out successfully." }`

### Movie Data
- **GET /movies/popular**: Fetch popular movies.
  - Response: `{ "success": true, "movies": [ { "id": "string", "title": "string", "poster_path": "string", "overview": "string" } ] }`

- **GET /movies/now_playing**: Fetch now playing movies.
  - Response: `{ "success": true, "movies": [ { "id": "string", "title": "string", "poster_path": "string", "overview": "string" } ] }`

- **GET /movies/top_rated**: Fetch top-rated movies.
  - Response: `{ "success": true, "movies": [ { "id": "string", "title": "string", "poster_path": "string", "overview": "string" } ] }`

- **GET /movies/upcoming**: Fetch upcoming movies.
  - Response: `{ "success": true, "movies": [ { "id": "string", "title": "string", "poster_path": "string", "overview": "string" } ] }`

- **GET /movies/search**: Search for movies by keyword.
  - Request query: `?query=keyword`
  - Response: `{ "success": true, "movies": [ { "id": "string", "title": "string", "poster_path": "string", "overview": "string" } ] }`

### Movie Details
- **GET /movies/:id**: Fetch details of a specific movie by its ID.
  - Response: `{ "success": true, "movie": { "id": "string", "title": "string", "poster_path": "string", "overview": "string", "trailer_key": "string" } }`



## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
  
- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Redux**: Redux is a predictable state container for JavaScript applications, providing a centralized store for managing application state. Visit [Redux](https://redux.js.org/) for more information.

- **React Redux**: React Redux is the official React binding for Redux, enabling React components to interact with the Redux store. Visit [React Redux](https://react-redux.js.org/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Material UI**: A popular React UI framework for building responsive and customizable user interfaces. Visit [Material UI](https://mui.com/) for more information.

- **TMDB API**: The Movie Database (TMDB) API provides a rich collection of movie, TV show, and actor data. Visit [TMDB](https://www.themoviedb.org/documentation/api) for more information.

- **Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Visit [Express](https://expressjs.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **JSON Web Token (JWT)**: JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. Visit [JWT](https://jwt.io/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.

- **React Hot Toast**: A React library for creating toast notifications with ease. Visit [React Hot Toast](https://react-hot-toast.com/) for more information.

- **YouTube IFrame Player API**: An API to embed and control YouTube videos in web pages. Visit [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

