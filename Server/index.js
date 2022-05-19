require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require("./routes/auth");

connection(); 

app.use(express.json())
app.use(cors);


app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes)


app.get('/', (req, res) => { res.send('Hello from Express!')});
const port = process.env.PORT || 5000;
app.listen(port , () => console.log('listening at port 5000'))

