import mongoose from 'mongoose';
import { CustomerSchema } from '../models/customer.js';

const Customer = mongoose.model('Customer', CustomerSchema);

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

export const getByCustomerId = (req, res) => {
  Customer.findById(req.params.customerId, (error, customer) =>{
    if(error)
      res.send(error);
    res.json(customer);
  });
};

export const deleteById = (req, res) =>{
Customer.findByIdAndDelete(req.params.customerId, (error, customer) =>{
  if(error)
    res.send(error);
  res.json(customer);
})
};

export const updateById = (req, res) =>{
  Customer.findOneAndUpdate({_id: req.params.customerId}, req.body, {new: true} ,(error, customer) => {
  if(error)
    res.send(error);
  res.json(customer);
  });
};