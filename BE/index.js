const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
require('dotenv').config();
const TodoRoutes = require("./routes/todos");
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use("/api/v1", TodoRoutes);

app.listen( port , () => {
    console.log('Server is running on port 3000')
})