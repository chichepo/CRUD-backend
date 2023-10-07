// swaggerOptions.js
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Megurit API Page',
        version: '1.0.0',
        description: 'The API List for Megurit project'
      },
      servers: [
        {
          url: 'http://localhost:3001',
        },
      ],
    },
    // Path to the API docs
    apis: ['./routes/*.js'],
  };
  
  module.exports = options;
  