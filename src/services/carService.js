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
