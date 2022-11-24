import mongoose from "mongoose";
import { CarSchema } from "../models/car.js";

let Car = mongoose.model('cars', CarSchema);

export const addNewCar = (req, res)=> {
    let car = new Car(req.body);
    car.save((error, car) =>{
        if(error) res.status(500).send(error);
        else res.send(car);
    });
}

export const fetchAllCars = (req, res) => {
    Car.find((error, car) => {
        if(error) res.status(500).send(error);
        else res.send(car);
    });
}

export const fetchCarById = (req, res) => {
    Car.findById(req.params.carId, (error, car) =>{
        if(error) res.status(500).send(error);
        else res.send(car);
    });
}

export const deleteCarById = (req, res) => {
    Car.findByIdAndDelete(req.params.carId, (error) => {
        if(error) res.status(500).send(error);
        else res.send({message: 'deleted successfully'});
    });
}

export const updateCarById = (req, res) => {
    Car.findByIdAndUpdate(req.params.carId, req.body, {new: true}, (error, car) => {
        if(error) res.status(500).send(error);
        else res.send(car);
    });
}