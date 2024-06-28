const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SalaryRoutes = require('./routes/salaryRoute');
const UserRoutes = require('./routes/empuserRoute');

const app = express();
app.use(cors());
app.use(express.json());

//  MongoDB Atlas connection string
const MONGODB_URI = "mongodb+srv://torin:1045@cluster0.uqsbi8u.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.listen(4000, () => {
  console.log("Server is Running");
});

app.use('/Salary', SalaryRoutes)
app.use('/User', UserRoutes)



