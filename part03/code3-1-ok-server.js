const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // req.url : 전체 url주소
  // url객체.parse(url 전체, 쿼리스트링 포함여부)
  const path = url.parse(req.url, true).pathname;

  // 텍스트를 html로 인식 + 한글 인코딩
  res.setHeader("Context-Type", "text/html; charset=utf-8");

  // in연산자 : "문자열" in 객체
  // -> 문자열에 해당하는 키가 있는지 boolean 리턴
  if (path in urlMap) {
    urlMap[path](req, res);
  } else {
    noFound(req, res);
  }
});

server.listen("3000", () => console.log("라우터를 만들어보자!"));

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  res.end(`
        <ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
        </ul>
    `);
};

const noFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
};

const urlMap = {
  "/": (req, res) => res.end("HOME"),
  "/user": user,
  "/feed": feed,
};
