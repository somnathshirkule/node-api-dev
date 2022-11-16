import mongoose from "mongoose";
import { CustomerSchema } from "../DBModels/Customer.js";

const Customer = mongoose.model('Customer', CustomerSchema);

export const addNewCustomer = (req, res) => {
    let customer = new Customer(req.body);

    customer.save((error, customer) =>{
        if(error)
            res.send(error);
        res.json(customer);
    });
}