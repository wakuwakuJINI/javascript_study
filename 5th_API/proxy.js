import express from "express"; // npm install express --save
import axios from "axios"; // npm install axios --save
import path from "path";
import cors from "cors";

const __dirname = path.resolve(); // 현재 디렉토리

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); // 모든 출처 허용 옵션. true 를 써도 된다.

const api = axios.create({
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 2000,
});

//서버시작
app.listen(3000, () => {
  console.log("server start port::3000");
});
//루트요청
app.get("/", (req, res) => {
  res.send("루트에 대한 요청"); // 클라이언트로 보냄
});

const fetchData = async (url, params, res) => {
  try {
    const result = await api.get(url, { params });
    if (result.status == 200) {
      res.send(result.data);
    } else {
      console.log("Error:", result.data);
      res.status(result.status).send("데이터를 가져오는데 실패했습니다.");
    }
  } catch (error) {
    console.error("API호출오류:", error);
    res.status(500).send("서버 오류 발생");
  }
};

app.get("/top-headlines", async (req, res) => {
  const { country, category, apiKey, page, pageSize = 10 } = req.query;

  if (!country || !apiKey) {
    return res
      .status(403)
      .send(
        "잘못된 접근입니다.[파라메터가 넘어오지 않았거나 올바르지 않습니다.]"
      );
  }
  const url = `https://newsapi.org/v2/top-headlines`;
  const params = {
    country,
    category,
    apiKey,
    page,
    pageSize,
  };

  fetchData(url, params, res);
});

app.get("/everything", async (req, res) => {
  const {
    keyword,
    // sources,
    // domains,
    apiKey,
    page,
    pageSize = 10,
    from,
    to,
  } = req.query;

  if (keyword && apiKey) {
    const url = `https://newsapi.org/v2/everything`;
    const params = {
      q: keyword,
      //sources,
      //domains,
      apiKey,
      page,
      pageSize,
      from,
      to,
    };

    fetchData(url, params, res);
  } else {
    return res
      .status(403)
      .send(
        "잘못된 접근입니다.[파라메터가 넘어오지 않았거나 올바르지 않습니다.]"
      );
  }
});
