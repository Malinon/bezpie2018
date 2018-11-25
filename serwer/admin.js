var express = require("express");
var cookieParser = require('cookie-parser')
var Mustache = require("mustache");
var sha256 = require("sha256");

module.exports = function (db) {
  var admin = express();
  admin.use(cookieParser());
  var view = {};
  var bodyParser = require('body-parser')
  admin.use(bodyParser.json());       // to support JSON-encoded bodies
  admin.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  var template = '<html>' +
    '{{error}}' +
    '<form method="post">' +
    '<input type="text" name="title" placeholder="Tytu przelewu"/><button name="submit">Submit</button>' +
    '</form></html>';

    admin.get("/", function (req, res) {
    var view = {};
    res.send(Mustache.render(template, view));
  });


  admin.post("/", function (req, res) {
    var title = req.body.title;
 

    
    db.get("SELECT * FROM payments WHERE title=$title", { $title: req.body.title }, function (err, row) {
      if (!row) {
        view.error = "Nie ma takiego przelewu";
        res.send(Mustache.render(template, view));
        return;
      }
      
    
      db.run("UPDATE payments SET realised=1 WHERE title=$title", { $title: req.body.title }, function (err) {

        console.log("Przelew zatwierdzony");
        res.send(Mustache.render(template, view));
      });

    });
  });




  return admin;
};