// express 객체 생성
const express = require("express");

// express객체 초기화 후 할당
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  // 헤더값 설정
  res.set({ "Content-Type": "text/html; charset=utf-8" });

  // 응답을 주고 요청 끊기
  res.end("헬로 Express");
});

// 포트 개설
app.listen(port, () => {
  console.log(`START SERVER : use ${port}`);
});
