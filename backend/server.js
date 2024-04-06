// server.js

const app = require("./app"); // Corrected 'required' to 'require'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
