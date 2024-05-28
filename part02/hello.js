// http 객체 생성
const http = require("http");

let count = 0;

// 서버 객체 생성 (콜백함수)
const server = http.createServer((req, res) => {
  log(count);

  // 응답 상태코드
  res.statusCode = 200;

  // 헤더 설정
  res.setHeader("Content-Type", "text/plain");

  // 화면 출력
  res.write("hello\n");

  setTimeout(() => {
    res.end("Node.js");
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

// listen 서버 실행 (포트번호, 진입 시 실행 함수)
server.listen(8000, () => console.log("Hello Node.js"));
