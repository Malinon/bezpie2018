var express = require("express");
var cookieParser = require('cookie-parser')
var Mustache = require("mustache");
var sha256 = require("sha256");

module.exports = function (db) {
  var index = express();
  index.use(cookieParser());

  var bodyParser = require('body-parser')
  index.use(bodyParser.json());       // to support JSON-encoded bodies
  index.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  var template = '<html>' +
  '{{error}}' +
  '<a href="/login/">Log in   </a>' +
  '<a href="/register">Register   </a>' +
  '<a href="/newPass">Change password</a>' +
  '</html>';

  index.get("/", function (req, res) {
    var view = {};
    res.send(Mustache.render(template, view));
  });




  return index;
};
