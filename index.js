//index.js

let express = require("express");
let app = express();

app.listen(8000, function(){
    console.log("App is running on port 8000");
});

app.get("/", function(req, res){
    res.sendfile("index.html");
});