const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;
console.log(connectionString)
mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
  });
  
  mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected')
  });