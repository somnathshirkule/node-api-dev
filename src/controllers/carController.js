import { addNewCar } from "../services/carService.js"

export const addCarController = (app)=> {
    app.post('/cars', addNewCar);
}