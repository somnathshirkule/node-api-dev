import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { addNewCustomer } from './src/Controllers/CustomerController.js';
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

app.get(`/customers`, (req, res) => {
    res.send(`GET API is working`);
});

//app.route.post
app.post(`/customers`, addNewCustomer);

app.put(`/customers/:customerId`, (req, res) => {
    res.send(`PUT API is working`);
});

app.delete(`/customers/:customerId`, (req, res) => {
    res.send(`DELETE API is working`);
});

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

