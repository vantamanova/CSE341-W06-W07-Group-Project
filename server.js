// Entry point of the application.
// Sets up Express server, middleware, and connects routes.

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('CSE341 Group Project is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
