// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('./utils/swaggerOptions');  // Import Swagger options
const errorHandler = require('./controllers/errorHandler');
const externalParametersRoutes = require('./routes/externalParametersRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const citiesRoutes = require('./routes/citiesRoutes');
const apartmentTypesRoutes = require('./routes/ApartmentTypesRoutes');
const apartmentsRoutes = require('./routes/ApartmentsRoutes');
const rentalPricesRoutes = require('./routes/RentalPricesRoutes');
const buildingsRoutes = require('./routes/buildingsRoutes');

const app = express();

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/externalParameters', externalParametersRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/cities', citiesRoutes);
app.use('/api/apartmentTypes', apartmentTypesRoutes);
app.use('/api/apartments', apartmentsRoutes);
app.use('/api/rentalPrices', rentalPricesRoutes);
app.use('/api/buildings', buildingsRoutes);

app.use(errorHandler);

// Server start
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
  console.log('API Swagger running on http://localhost:3001/api-docs');
});
