CRUD Backend Project
====================

Overview
--------

This project provides a backend service to manage external parameters. It allows you to Create, Read, Update, and Delete (CRUD) records in a MySQL database. The API is built with Node.js and Express, and it's connected to a MySQL database.

How to Setup
------------

### Prerequisites

*   Node.js installed
    
*   MySQL database installed and running
    
*   Docker installed (optional for containerized setup)
    

### Steps

1.  git clone https://github.com/your-username/crud-backend.git
    
2.  cd crud-backend
    
3.  npm install
    
4.  DB\_HOST=127.0.0.1DB\_USER=eliechDB\_PASSWORD=Qwerty01!!DB\_NAME=Megurit
    
5.  npm start
    

Optional: Run with Docker
-------------------------

If you prefer to run the application in a containerized environment using Docker, follow these steps:

### Prerequisites

*   Docker installed and running
    

### Steps

1.  **Prepare Docker Configuration**:
    
    *   Ensure your Dockerfile is in the root directory of the project.
        
    *   Ensure your docker-compose.yml is located in the DB-Docker-Setup folder.
        
2.  cd DB-Docker-Setupdocker-compose up --build
    
3.  **Verify Containers**:
    
    *   Access the backend at: http://localhost:3001
        
    *   Access API documentation at: http://localhost:3001/api-docs
        
4.  docker-compose down
    

API Endpoints
-------------

*   Create Record: POST /api/externalParameters
    
*   Read Records: GET /api/externalParameters
    
*   Update Record: PUT /api/externalParameters/:id
    
*   Delete Record: DELETE /api/externalParameters/:id
    

For detailed information, refer to the API documentation.