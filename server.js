const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,  
  useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
    console.log("MongoDB connection error", err);
})

app.get('/', (req,res) => {
  res.send("API is running...");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));






