const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

// 누군가가 /pet 으로 방문을 하면..
// pet 관련된 안내문을 띄워주자

app.get("/pet", function (req, res) {
  res.send("펫 용품 쇼핑 페이지입니다.");
});

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

var cors = require("cors");
// app.use(cors());

app.get("/sound/:name", function (req, res) {
  const { name } = req.params;
  console.log(name);

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "oh no" });
  }
  // const p = req.params;
  // p.name = ~~
  //res.sendFile(__dirname + "/index.html");
});
