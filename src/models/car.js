import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CarSchema = new Schema({
    car_model: String,
    car_manf: {
        type: String,
        required: 'provide car manufacturer'
    },
    car_capacity: {
        type: Number,
        required: 'provide car passenger capacity'
    },
    created_on:{
        type: Date,
        default: Date.now
    }
});