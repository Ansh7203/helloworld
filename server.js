var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Hello World!");
    res.send("My name is Anshav Parmar and currently I am pursuing Computer Programming Course.");
    res.send("My hobbies are to play cricket and I love travelling with my loved ones.");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);