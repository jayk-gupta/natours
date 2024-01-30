const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// console.log(app.get('env'));
// console.log(process.env);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((connection) => {
    console.log('database connection successful');
  });

/////////////////////////////////////////////
const port = process.env.PORT || 3001;
// sever
app.listen(port, () => {
  console.log('app is running on port 3000');
});
// const testTour = new Tour({
//   name: 'The river',
//   rating: 4.6,
//   price: 599,
// });
// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => console.log(err));
