var express = require("express");
var cookieParser = require('cookie-parser')
var Mustache = require("mustache");
var sha256 = require("sha256");

module.exports = function (db) {
  var newPass = express();
  newPass.use(cookieParser());

  var bodyParser = require('body-parser')
  newPass.use(bodyParser.json());       // to support JSON-encoded bodies
  newPass.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  var template = '<html>' +
    '{{error}}' +
    '<form method="post">' +
    '<input type="text" name="login" placeholder="login"/><input type="mail" name="mail" placeholder="e-mail"/><button name="submit">Submit</button>' +
    '</form></html>';

  newPass.get("/", function (req, res) {
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


  newPass.post("/", function (req, res) {
    var login = req.body.login;
    var email = req.body.mail;

    var newPassword = "12345";
    var salt = randomString(256);
    db.get("SELECT name, email FROM users WHERE name=$name", { $name: req.body.login }, function (err, row) {
      if (!row) {
        view.error = "There is no user";
        res.send(Mustache.render(template, view));
        return;
      }
      if (email != row.email) {

        view.error = "Wrong mail";
        res.send(Mustache.render(template, view));
        return;
      }
      var sessionId = randomString(256);
      db.run("UPDATE users SET salt=$salt, passwd=$passwd  WHERE name=$name", { $salt: salt, $passwd: sha256(salt + newPassword) }, function (err) {

        console.log("Haslo uzytownika " + login + "zostało zmienione na " + newPassword);
      });
      db.run("UPDATE users SET sessionId=$sessionId WHERE name=$name", {$sessionId: sessionId, $name: login}, function(err) {
        res.cookie("sessionId", sessionId);
        res.redirect("/user");
      });
    });
  });




  return newPass;
};
