// Load environment variables from config.env using dotenv
require("dotenv").config({ path: "./config/config.env" });

// Importing the Express application from the app.js file
const app = require("./app");

// Setting up the port to listen on, defaulting to 3000 if not provided
const PORT = process.env.PORT || 3000;

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
