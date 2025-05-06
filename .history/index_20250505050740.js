const express = require('express');
const app = express();
const rummersRouter = require('./routes/rumorsRoute');


app.use(express.json());
app.use('/api/rumors', rummersRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
