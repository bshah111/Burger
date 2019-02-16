var express = require("express");
var exphbs = require("express-handlebars")
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT ||3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controller/burgers_controller.js");

app.use("/", routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
