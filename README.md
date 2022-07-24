# clusters-api

GraphQL API for a forum, i am using it on my other project on the front end, <a href="https://github.com/leojuriolli7/cluster/">Cluster</a>. 

It uses Nodejs and Express, Mongoose for connecting with Mongodb and JWT for authentication.

## Features:

- User registration, login and authentication with JWT

- Option to create posts and comment in posts (if logged in)

- Option to edit and delete posts (if logged in and if your user created them)

- Option to edit and delete comments (if logged in and if your user created them)

## Usage:

1. Clone the repository:

```bash
git clone git@github.com:leojuriolli7/cluster-api.git
```

2. Download dependencies:

```bash
npm install
```

3. Add your environment variables to .env (Database url, username, password, JWT secret token)

4. Have the database running (may have to alter db.ts if not using MongoDB Atlas)

5. Run the project:

```bash
npm run dev
```

6. Access /graphql to test the API and to see the documentation.
