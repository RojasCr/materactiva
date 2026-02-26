const express = require("express");
//const compression = require("compression")

const app = express();
const port = 8080;

// app.use(compression());
app.use(express.static(`${process.cwd()}/src/public`));


app.get("/", (req, res) => {
    res.sendFile(`${process.cwd()}/src/views/inicio.html`);
});

app.get("/operacionesCombinadas", (req, res) => {
    res.sendFile(`${process.cwd()}/src/views/operacionesCombinadas.html`);
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

app.get("/sitemap.xml", (req, res) => {
    res.sendFile(`${process.cwd()}/sitemap.xml`);
});

app.get("/robots.txt", (req, res) => {
    res.sendFile(`${process.cwd()}/robots.txt`);
});

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});