var express = require("express");
var cookieParser = require('cookie-parser')
var Mustache = require("mustache");
var sha256 = require("sha256");

module.exports = function (db) {
  var register = express();
  register.use(cookieParser());

  var bodyParser = require('body-parser')
  register.use(bodyParser.json());       // to support JSON-encoded bodies
  register.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  var template = '<html>' +
    '{{error}}' +
    '<form method="post">' +
    '<input type="text" name="login" placeholder="login"/><input type="password" name="password" placeholder="password"/><input type="password" name="password2" placeholder="password2"/><input type="mail" name="mail" placeholder="e-mail"/><button name="submit">Submit</button>' +
    '</form></html>';

  register.get("/", function (req, res) {
    var view = {};
    res.send(Mustache.render(template, view));
  });

  function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }


  register.post("/", function (req, res) {
    var view = {};
    var login = req.body.login;
    var password = req.body.password;
    var password2 = req.body.password2;
    var email = req.body.mail;

    var salt = randomString(256);
    if(password != password2){
      view.error = "Passwords are diffrent";
      res.send(Mustache.render(template, view));
      return;
    }
    db.run("INSERT INTO users (name, salt, passwd, email) VALUES(?, ?, ?, ?)", login, salt, sha256(salt + password), email), function (err) {
    };
    var sessionId = randomString(256);
    db.run("UPDATE users SET sessionId=$sessionId WHERE name=$name", {$sessionId: sessionId, $name: login}, function(err) {
      res.cookie("sessionId", sessionId);
      res.redirect("/user");
    });
  });





  return register;
};
