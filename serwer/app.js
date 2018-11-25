var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./database.db");
var sha256 = require("sha256");
var cookieParser = require('cookie-parser')



function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

db.all("SELECT name FROM sqlite_master WHERE type='table';", function(err, rows) {
  if(rows.length > 0 ) return;
  db.run("CREATE TABLE users (name TEXT, salt TEXT, passwd TEXT, sessionId TEXT, email TEXT)", function(err) {
    var salt = randomString(256);
    db.run("INSERT INTO users (name, salt, passwd, email) VALUES(?, ?, ?,?)", "test", salt, sha256(salt + "123456"), "myMail");
    db.run("INSERT INTO users (name, salt, passwd, email) VALUES(?, ?, ?,?)", "admin", salt, sha256(salt + "admin"), "myAdmin");
  });
  
  db.run("CREATE TABLE payments (userName TEXT, title TEXT, targetAccount TEXT, amount INT, realised INT)", function(err) {
    db.run("INSERT INTO payments (userName, title, targetAccount, amount, realised) VALUES(?, ?, ?, ?, ?)", "test", "title", "123456", 100, 1);
  });

  console.log("Database created");
});

var express = require("express");
var app = express();
app.use(cookieParser());

app.get("/", function(req, res) {
  var sessionId = req.cookies.sessionId;
  db.get("SELECT name FROM users WHERE sessionId=$sessionId", {$sessionId: sessionId}, function(err, row) {
    if(row == undefined) res.redirect("/index");
    else res.redirect("/user");
  });
});

var login = require("./login")(db);
app.use("/login", login);

var user = require("./user")(db);
app.use("/user", user);

var index = require("./index")(db);
app.use("/index", index);

var register = require("./register")(db);
app.use("/register", register);

var newPass = require("./newPass")(db);
app.use("/newPass", newPass);

var admin = require("./admin")(db);
app.use("/admin", admin);

app.use(express.static("C:\Users\Jachniak Mateusz\Desktop\L6_Bezp\lista4" + 'public'));

// var content = require("./content")(db);
// app.use("/content", content);

app.listen(3000);
