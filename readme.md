
# CRUD Backend Project

## Overview
This project provides a backend service to manage external parameters. It allows you to Create, Read, Update, and Delete (CRUD) records in a MySQL database. The API is built with Node.js and Express, and it's connected to a MySQL database.

## How to Setup

### Prerequisites
- Node.js installed
- MySQL database installed and running

### Steps

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-username/crud-backend.git
   ```

2. **Navigate to Project Directory**:  
   ```bash
   cd crud-backend
   ```

3. **Install Dependencies**:  
   ```bash
   npm install
   ```

4. **Environment Configuration**:  
   Create a `.env` file at the root of your project and populate the database connection details:
   ```
    DB_HOST=127.0.0.1
    DB_USER=eliech
    DB_PASSWORD=Qwerty01!!
    DB_NAME=Megurit
   ```

5. **Run the Project**:  
   ```bash
   npm start
   ```

## API Endpoints

- Create Record: POST `/api/externalParameters`
- Read Records: GET `/api/externalParameters`
- Update Record: PUT `/api/externalParameters/:id`
- Delete Record: DELETE `/api/externalParameters/:id`

For detailed information, refer to the API documentation.
