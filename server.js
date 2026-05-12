const http = require("http");

const port = 3030;

const users = [
  {
    name: "15_Mata(O)",
    jsdnumber: 15,
    id: 1,
  },
  {
    name: "21_Pathomrat(Max)",
    jsdnumber: 21,
    id: 2,
  },
  {
    name: "24_Pipatpong(Palm)",
    jsdnumber: 24,
    id: 3,
  },
  {
    name: "32_Suphatip(Gife)",
    jsdnumber: 32,
    id: 4,
  },
  {
    name: "33_Suttipong(Tai)",
    jsdnumber: 33,
    id: 5,
  },
];

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method} ${req.headers}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.end("สวัสดีครับยินดีต้อนรับสู่ Genmate D");
    }
    if (req.url === "/users") {
      res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(users));
    }
    if (req.url === "/randomgenmate") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      const randomNumber = Math.floor(Math.random() * users.length);

      res.end(JSON.stringify(users[randomNumber]));
    }
    if (req.url === "/jsdnumber") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(users));
    }
  }
});

server.listen(port, () => {
  console.log(`server is running port ${port} 🌍`);
});
