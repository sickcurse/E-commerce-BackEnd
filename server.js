const express = require('express');
const sequelize = require('./config/connection');
const cors = require('cors');
const routes = require('./routes'); // Make sure this file exists and is exported properly

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes); // Use the correct routes middleware here

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
