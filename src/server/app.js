const express = require("express");

const app = express();
const port = 8080;

app.use(express.static(`${process.cwd()}/src/public`));

app.get("/", (req, res) => {
    res.sendFile(`${process.cwd()}/src/views/inicio.html`);
});

app.get("/polinomios", (req, res) => {
    res.sendFile(`${process.cwd()}/src/views/polinomios.html`);
});

app.get("/ecuaciones", (req, res) => {
    res.sendFile(`${process.cwd()}/src/views/ecuaciones.html`);
});

app.get("/radicales", (req, res) => {
    res.sendFile(`${process.cwd()}/src/views/radicales.html`);
});

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});