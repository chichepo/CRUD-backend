const mysql = require('mysql2');

let db;

const maxRetries = 3;

const connectToDatabase = (retries = 0) => {
  if (retries >= maxRetries) {
    console.log('Max retries reached. Exiting...');
    process.exit(1);
    return;
  }

  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) {
      console.log('Error connecting to Db:', err);
      console.log(`Retrying in 5 seconds... (Attempt ${retries + 1}/${maxRetries})`);
      setTimeout(() => connectToDatabase(retries + 1), 5000);
    } else {
      console.log('Database connected!');
    }
  });
};

connectToDatabase();

db.on('error', (err) => {
  console.log('Database error:', err);

  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    connectToDatabase();
  }
});

module.exports = db;
