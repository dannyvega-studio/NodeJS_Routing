var express = require("express");

var app = express();

app.set("view engine", "pug");

//Verbos Http => GET / POST / PUT / PATCH / OPTION / HEADERS / DELETE

//Aqui hace RENDER de la VISTA Index.PUG
app.get("/", function(req,res){
    res.render("index");
}); 

app.get("/:nombre",function(req,res){
    //console.log(req.params.nombre);
    //res.render("form");
    res.render("form", {nombre: req.params.nombre});
})

//Aqui hace RENDER de la VISTA form.pug
app.post("/",function(req,res){
    res.render("form");
});

app.listen(8080);