import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { addCustomerController } from './src/controllers/customerController.js';
import { addCarController } from './src/controllers/carController.js';

const app = express();
const PORT = 8080;

const MONGO_CON_STR = 'mongodb://localhost:27017/CUSTOMERS';

//Connecting app to MongoDB with mongoose
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_CON_STR,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

addCustomerController(app);
addCarController(app);

app.get('/', (req, res) =>{
  res.json({'message':`Express server running on port ${PORT}`});
})

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

