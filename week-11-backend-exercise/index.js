const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const members = [
  { name: "สมชาย", lastName: "ใจดี", position: "Developer" },
  { name: "สมหญิง", lastName: "รักเรียน", position: "Designer" },
  { name: "มานี", lastName: "มีสุข", position: "Tester" },
];

app.get("/members", (req, res) => {
  res.json(members);
});

app.listen(3030, () => console.log("Server running 🚀"));

module.exports = app;
