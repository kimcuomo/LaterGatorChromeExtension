const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Controller = require('./Controller');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create a show in the database
app.post('/', Controller.createShow,
  (req, res) => res.status(201).json(res.locals.show)
);

//update a show in the database

//delete a show in the database

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));