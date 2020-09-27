const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const app = express();
const port = 3030;

app.use(express.json());

app.get('/gallery/:product_id', (req, res) => {
  const pid = req.params.product_id;
  db.getDefaults(pid)
    .then((galleryUrls) => {
      res.send(galleryUrls);
      res.end();
    })
    .catch((err) => {
      console.error(err);
    })
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});