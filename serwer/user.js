var express = require("express");
var cookieParser = require('cookie-parser')
var Mustache = require("mustache");
var hacker = require("./content");

module.exports = function (db) {
  var user = express();
  user.use(cookieParser());

  var bodyParser = require('body-parser')
  user.use(bodyParser.json());       // to support JSON-encoded bodies
  user.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

  user.get("/", function (req, res) {
    var sessionId = req.cookies.sessionId;
    db.get("SELECT name FROM users WHERE sessionId=$sessionId", { $sessionId: sessionId }, function (err, row) {
      if (row == undefined) { console.log("user not logged"); res.redirect("/index"); return; }

      var template = '<html>' +
        '{{error}}' +
        '<a href="/user/">Lista przelewów</a>' +
        '<a href="/user/przelew">Nowy przelew</a>' +
        '<table><thead><tr><th>tytuł</th><th>nr konta</th><th>kwota</th><th>zrealizowany</th></thead><tbody>{{#przelewy}}<tr><td>{{title}}</td><td>{{targetAccount}}</td><td>{{amount}}</td><td>{{realised}}</td></tr>{{/przelewy}}</tbody></table>' +
        '</html>';

      view = { przelewy: [] };
      db.all("SELECT userName, title, targetAccount, amount, realised FROM payments WHERE userName=$userName", { $userName: row.name }, function (err, rows) {
        view.przelewy = rows || [];
        res.send(Mustache.render(template, view));
      });
    });
  });


  var przelewTemplate = '<html>' +
    '{{error}}' +
    '<a href="/user/">Lista przelewów</a>' +
    '<a href="/user/przelew">Nowy przelew</a>' +
    '<form method="post"><input type="text" name="title" placeholder="Tytuł"/><input type="text" name="targetAccount" placeholder="Nr konta"/><input type="text" name="amount" placeholder="Kwota"/><button name="submit">Zrób przelew</button></form>' +
    '</html>';
  user.get("/przelew", function (req, res) {
    var sessionId = req.cookies.sessionId;
    db.get("SELECT name FROM users WHERE sessionId=$sessionId", { $sessionId: sessionId }, function (err, row) {
      if (row == undefined) { console.log("user not logged"); res.redirect("/index"); return; }

      res.send(Mustache.render(przelewTemplate, {}));
    });
  });

  user.post("/przelew", function (req, res) {
    var sessionId = req.cookies.sessionId;
    db.get("SELECT name FROM users WHERE sessionId=$sessionId", { $sessionId: sessionId }, function (err, row) {
      if (row == undefined) { console.log("user not logged"); res.redirect("/index"); return; }
      tmp = row.name;
      title = req.body.title;
      targetAccount = req.body.targetAccount;
      amount = req.body.amount;

      res.redirect("./potwierdzenie");

    });
  });


  user.get("/potwierdzenie", function (req, res) {
    var sessionId = req.cookies.sessionId;

    db.get("SELECT name FROM users WHERE sessionId=$sessionId", { $sessionId: sessionId }, function (err, row) {
      if (row == undefined) { console.log("user not logged"); res.redirect("/index"); return; }

      var template = '<html>' +
        '{{error}}' +
        '<a href="/user/">Lista przelewów</a>' +
        '<a href="/user/przelew">Nowy przelew</a>' +
        '<form method="post"><input type="text" name="title" placeholder=' + title + ' disabled="disabled"><input type="text" name="targetAccount" placeholder=' + targetAccount + ' disabled="disabled"><input type="text" name="amount" placeholder=' + amount + ' disabled="disabled"><button name="submit">Zatwierdź</button></form>' +
        '</html>';

      view = { przelewy: [] };

      res.send(Mustache.render(template, view));

    });

    user.post("/potwierdzenie", function (req, res) {
      var sessionId = req.cookies.sessionId;
      db.get("SELECT name FROM users WHERE sessionId=$sessionId", { $sessionId: sessionId }, function (err, row) {
        if (row == undefined) { console.log("user not logged"); res.redirect("/index"); return; }

        db.run("INSERT INTO payments (userName, title, targetAccount, amount, realised) VALUES(?, ?, ?, ?, ?)", tmp, title, targetAccount, amount, 0, function (err) {
          res.redirect("./dane");
        });


      });
    });
  });

  user.get("/dane", function (req, res) {
    var sessionId = req.cookies.sessionId;

    db.get("SELECT name FROM users WHERE sessionId=$sessionId", { $sessionId: sessionId }, function (err, row) {
      if (row == undefined) { console.log("user not logged"); res.redirect("/index"); return; }

      var template = '<html>' +
        '{{error}}' +
        '<a href="/user/">Lista przelewów</a>' +
        '<a href="/user/przelew">Nowy przelew</a>' +
        '<form method="post"><input type="text" name="title" placeholder=' + title + ' disabled="disabled"><input type="text" name="targetAccount" placeholder=' + targetAccount + ' disabled="disabled"><input type="text" name="amount" placeholder=' + amount + ' disabled="disabled"></form>' +
        '</html>';

      view = { przelewy: [] };

      res.send(Mustache.render(template, view));
    });
  });
  return user;
}
