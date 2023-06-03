const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/penjualan", function(req, res){
    res.render("penjualan");
});

app.get("/pembelian", function(req, res){
    res.render("pembelian");
});

app.post("/penjualan", function(req, res){
    res.render("stoccounting", {
        idFaktur: req.body.idFaktur,
        tanggalTransaksi: req.body.tanggalPenjualan
    });
});

app.post("/pembelian", function(req, res){
    res.render("stoccounting", {
        idFaktur: req.body.idFaktur,
        tanggalTransaksi: req.body.tanggalPembelian
    });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});