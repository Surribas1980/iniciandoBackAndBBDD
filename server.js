const { RexistroUser } = require("./funcions.js");
const express = require("express");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
// Accedo o arquivo estático
const carpetaStatic = path.join(__dirname, "static");

app.use(express.static(carpetaStatic));

app.post("/rexistro", RexistroUser);





/*
app.get("/contacto", (req, res) => {
  //res.sendFile("./static/contacto.html");// da erro
  //res.sendFile(nomeDaPaxina,{root: <carpetaOndeEsta>})
  res.sendFile("contacto.html", { root: carpetaStatic });
});
app.get("/somos", (req, res) => {
  //res.sendFile("./static/contacto.html");// da erro
  //res.sendFile(nomeDaPaxina,{root: <carpetaOndeEsta>})
  res.sendFile("somos.html", { root: carpetaStatic });
});
app.get("/datos/:id", (req) => {
  console.log(req.params);
});
app.get("/datosquery", (req) => {
  console.log(req.query);
});
app.get("/backEnviaDatos", (req, res) => {
  let datos = {
    dato1: "Jacinto",
    dato2: "Pepe",
  };
  res.status(200).send(datos);
});*/
//START SERVER
app.listen(3000, function () {
  console.log("Server running");
});
