const express = require('express');
const mongoose = require('mongoose');
const app = express();
const rummersRouter = require('./routes/rumorsRoute');


app.use(express.json());
app.use('/api/rumors', rummersRouter);

mongoose
  .connect("mongodb://localhost:27017/sphi")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
