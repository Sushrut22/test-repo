const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  console.log(res.statusCode);

  //   if (res.statusCode == 200) {
  //     res.sendFile(__dirname + "/success.html");
  //   } else {
  res.sendFile(__dirname + "/failure.html");
  //   }
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.post("/tryagain", function (req, res) {
  res.redirect("/");
});

// works on heroku && localhost
app.listen(process.env.port || 3000, () => {
  console.log(`Example app listening on port 3000`);
});
