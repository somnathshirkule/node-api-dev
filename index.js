import express from 'express';

const app = express();
const PORT = 8080;

app.get(`/customers`, (req, res) => {
    res.send(`GET API is working`);
});

app.post(`/customers`, (req, res) => {
    res.send(`POST API is working`);
});

app.put(`/customers/:customerId`, (req, res) => {
    res.send(`PUT API is working`);
});

app.delete(`/customers/:customerId`, (req, res) => {
    res.send(`DELETE API is working`);
});

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

