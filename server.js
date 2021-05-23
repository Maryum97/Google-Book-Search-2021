const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');
const db = mongoose.connection;
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/client/build'))
}

// API routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
db.on("Error on Mongo connection", error => console.error(error));
db.once("connected", () => console.log("Success! You are connected to Mongoose"));

app.listen(PORT, () => {
  console.log(`API server now on port:${PORT}`);
});
