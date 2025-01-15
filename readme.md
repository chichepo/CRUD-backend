# **CRUD Backend**

A Node.js backend application for managing CRUD operations, designed for educational purposes. 

It supports modular routes, controllers, and database interactions using MySQL. Includes API documentation with Swagger.

## **Table of Contents**
1.Features
2.Prerequisites
3.Setup
4.Running Locally
5.Docker Deployment
6.API Documentation
7.Project Structure

**Features**

-**Modular Design**: Separate controllers and routes for clean code.

-**Database Integration**: MySQL database support with Docker containerization.

-**Swagger Documentation**: Built-in interactive API docs.

-**Environment Configuration**: Managed using .env variables.

**Prerequisites**

-[Node.js](https://nodejs.org/) v14 or higher

-[Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed

-[MySQL](https://www.mysql.com/) (optional for manual setup)

**Setup**

1.Clone the repository:

git clone https://github.com/your-repo/crud-backend.git

cd crud-backend

2.Install dependencies:

npm install

3.Configure environment variables:

-Create a .env file in the root directory:

DB_HOST=127.0.0.1
DB_USER=eliech
DB_PASSWORD=Qwerty01!!
DB_NAME=Megurit

cp .env.example .env

-Update the .env file with your database and application configuration.

**Running Locally**

1.Start the application:

npm start

2.Access the application:

-API Base URL: [http://localhost:3001](http://localhost:3001)

-Swagger Documentation: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

**Docker Deployment**

1.**Configure Environment Variables**:

Ensure you have a .env file with the necessary configurations. For Docker, these will be loaded into the container.

2.**Build and Run Containers**:

-Navigate to the DB-Docker-Setup directory and run the following commands:

docker-compose up --build

-Verify that the containers are running:

docker ps

-Access the application:

-API Base URL: [http://localhost:3001](http://localhost:3001)

-Swagger Documentation: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

3.**Stop the Containers**:

To stop the application, run:

docker-compose down

**API Documentation**

-Swagger UI: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

-The API is fully documented and supports interactive exploration.

**Project Structure**

.

├── DB-Docker-Setup

│   ├── docker-compose.yml    # Docker Compose configuration

│   └── init.sql              # Database initialization script

├── Dockerfile                # Dockerfile for Node.js app

├── config

│   └── dbConfig.js           # Database configuration

├── controllers               # Business logic and controllers

├── index.js                  # Application entry point

├── package.json              # Project dependencies and scripts

├── routes                    # Route definitions

├── utils                     # Utility functions

└── readme.md                 # Documentation
