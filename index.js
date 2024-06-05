const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/webhook', (req, res) => {
  const data = req.body;
  console.log('Received webhook:', data);
  // Process the webhook data here
  res.status(200).send('Webhook received');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
