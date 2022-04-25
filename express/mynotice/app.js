import express from "express";
import globalRouter from "./globalRouter.js";

const app = express();

app.use('/', globalRouter);

const PORT = process.env.PORT || 3000;
// .env 파일 내의 PORT 값을 가져옴, 없다면 3000으로 설정
// 3000 PORT가 사용 중일 경우 다른 PORT 사용 가능

app.listen(PORT, () => {
  console.log(`* Listening on port ${PORT}`);
});
