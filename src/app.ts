import express from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './config/database';
import { setUserRoutes } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to the database
connectDatabase();

// Set up user routes
setUserRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});