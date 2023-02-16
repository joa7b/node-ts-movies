const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const route = require('./app/src/Http/Routes/movies.route.ts')

app.use(express.json());
app.use(cors());

app.use('/movies', route);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});




