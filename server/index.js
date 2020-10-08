const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const cors = require('cors');

const app = express();
const port = 3030;

// CORS is only used for Jest testing
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/:product_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// This API endpoint returns a set of default URLs to populate the carousel
app.get('/gallery/:product_id/:metal/:cut/:carat', (req, res) => {
  const { product_id, metal, cut, carat } = req.params;
  db.getDefaults(product_id, metal, cut, carat)
    .then((galleryUrls) => {
      res.send(galleryUrls);
      res.end();
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get('/cost/:product_id/:metal', (req, res) => {
  const { product_id, metal } = req.params;
  db.getCost(product_id, metal)
    .then((cost) => {
      res.send(cost);
      res.end();
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get('/static/:product_id', (req, res) => {
  const { product_id } = req.params;
  db.getStatic(product_id)
    .then((data) => {
      res.send(data);
      res.end();
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});