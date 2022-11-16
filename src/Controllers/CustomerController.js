import mongoose from "mongoose";
import { CustomerSchema } from "../models/customer.js";

const Customer = mongoose.model('Customer', CustomerSchema);

export const addCustomerController = (app) =>{
    app.get(`/customers`, fetchAllCustomers);
    
    app.post(`/customers`, addNewCustomer);
    
    app.put(`/customers/:customerId`, (req, res) => {
        res.send(`PUT API is working`);
    });
    
    app.delete(`/customers/:customerId`, (req, res) => {
        res.send(`DELETE API is working`);
    });
}


export const addNewCustomer = (req, res) => {
    let customer = new Customer(req.body);

    customer.save((error, customer) =>{
        if(error)
            res.send(error);
        res.json(customer);
    });
}

export const fetchAllCustomers = (req, res) => {
  Customer.find((error, customer) => {
    if(error)
      res.send(error);
    res.json(customer);
  });
}