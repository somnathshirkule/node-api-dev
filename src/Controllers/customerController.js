import { tokenValidator } from "../filters/authenticationFilter.js";
import { fetchAllCustomers, getByCustomerId, addNewCustomer, updateById, deleteById } from "../services/customerService.js";

export const addCustomerController = (app) =>{
    app.get(`/customers`, tokenValidator, fetchAllCustomers);
    
    app.get(`/customers/:customerId`, tokenValidator, getByCustomerId);

    app.post(`/customers`, tokenValidator, addNewCustomer);
    
    app.put(`/customers/:customerId`, tokenValidator, updateById);
    
    app.delete(`/customers/:customerId`, tokenValidator, deleteById);
}
