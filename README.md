# live-dashboard-users
A Full Stack application that shows current logged-in users

## Get Started

### 1. Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager
- [MySQL](https://www.mysql.com/downloads/) - Relational database management system (RDBMS)

### 2. Installation

On the command prompt run the following commands:

``` 
 $ git clone https://github.com/zaherkassem/live-users-dashboard.git
 $ cd live-users-dashboard
 $ cp .env.example .env (edit it with your secret key and database information)
 $ npm install --legacy-peer-deps
 $ npm run migrate
 ```
 Finally, start and build the application:
 
 ```
 $ npm run build (For development)
 $ npm run build:prod (For production)
```

List of NPM Commands:
 
  ```
  $ npm run dev        # in the root folder for run the server 
  $ npm start          # in the client folder for run the front-end 
  $ npm run lint       # linting
  $ npm run clean      # remove dist and node_modules folder and install dependencies
 ```

### 3. Usage

URL : http://localhost:9000/


### 4. Useful Link
- Web framework for Node.js - [Express](http://expressjs.com/)
- JavaScript ORM  for Node.js - [Objection](http://objection.org/)
- SQL Query Builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle - [Knex](http://knexjs.org/)
- JSON Web Tokens(jwt) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- Logging Library - [Winston](https://www.npmjs.com/package/winston)
- Object schema validation  - [yup](https://www.npmjs.com/package/yup)
- JavaScript library for building user interfaces - [React](https://facebook.github.io/react/)
- Predictable state container - [Redux](http://redux.js.org/)
- Redux Form - [Redux Form](http://redux-form.com/8.3.0/)
- Declarative routing for React - [React-Router](https://reacttraining.com/react-router/)
- Promise based HTTP client - [Axios](https://github.com/mzabriskie/axios)
- Environment configuration - [dotenv](https://www.npmjs.com/package/dotenv)
- Code linting tool - [ESLint](http://eslint.org/)
- Code formatter - [Prettier](https://www.npmjs.com/package/prettier)