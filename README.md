# clusters-api

GraphQL API for a forum. 

## Features:

- User registration, login and authentication with JWT

- Option to create posts and comment in posts (if logged in)

- Option to edit and delete posts (if logged in and if your user created them)

- Option to edit and delete comments (if logged in and if your user created them)

## Usage:

1. Clone the repository.

2. Download dependencies. ( npm install )

3. Add your environment variables to .env (Database url, username, password, JWT secret token)

4. Have the database running (Locally or using cloud solutions, like MongoDB Atlas)

5. Run the project with npm run dev.

6. Access /graphql to test the API and to see the documentation.
