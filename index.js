const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name' });
  }
  res.status(200).json({ success: true, person: `Welcome ${name}` });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
