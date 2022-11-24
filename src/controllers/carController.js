import { addNewCar, deleteCarById, fetchAllCars, fetchCarById, updateCarById } from "../services/carService.js"

export const addCarController = (app)=> {
    app.post('/cars', addNewCar);
    app.get('/cars', fetchAllCars);
    app.get('/cars/:carId', fetchCarById);
    app.delete('/cars/:carId', deleteCarById);
    app.put('/cars/:carId', updateCarById);
}