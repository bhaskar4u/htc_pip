const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const Cors = require('cors')
const path = require('path')

const connectDB = require('./config/db')
const routes = require('./routes/index')


dotenv.config({ path: 'config/config.env' })

connectDB()

const PORT = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.get('/',(req,res)=>{
    res.send("welcome to node")
})

app.use(Cors())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ extended: true,limit:'50mb' }))
app.use(routes)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.listen(PORT, (err) => {
    if (err) {
      console.log(`Server Not Running ${err}`);
    }
    console.log(`Server running in ${process.env.NODE_ENV} on Port:${PORT}`);
  })