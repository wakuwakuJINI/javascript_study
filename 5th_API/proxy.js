import express from "express"; // npm install express --save
import axios from "axios"; // npm install axios --save
import path from "path";
import cors from "cors";

const __dirname = path.resolve(); // 현재 디렉토리

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); // 모든 출처 허용 옵션. true 를 써도 된다.

app.listen(3000, () => {
  console.log("server start port::3000");
});

app.get("/", (req, res) => {
  res.send("루트에 대한 요청"); // 클라이언트로 보냄
});

app.get("/top-headlines", async (req, res) => {
  let country = req.query.country;
  let category = req.query.category;
  let apiKey = req.query.apiKey;
  let page = req.query.page;
  let pageSize = req.query.pageSize;

  if (country && apiKey) {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    if (category) {
      url += `&category=${category}`;
    }
    if (page) {
      url += `&page=${page}`;
    }
    if (pageSize) {
      url += `&pageSize=${(pageSize = 10)}`;
    }

    console.log(url);

    const result = await api.get(url);
    if (result.status == 200) {
      res.send(result.data);
    } else {
      console.log(result.data);
    }
  } else {
    res.status(403).send("잘못된 접근입니다. [파라메터가 넘어오지 않았습니다]");
  }
});

app.get("/everything", async (req, res) => {
  let publishedAt = req.query.publishedAt;
  let keyword = req.query.q;
  let apiKey = req.query.apiKey;
  let page = req.query.page;
  let pageSize = req.query.pageSize;

  if (keyword && apiKey) {
    const result = await api.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: keyword,
        publishedAt: publishedAt,
        sortBy: "popularity",
        apiKey: apiKey,
        page: page,
        pageSize: (pageSize = 10),
      },
    });
    if (result.status == 200) {
      res.send(result.data);
    } else {
      console.log(result.data);
    }
  } else {
    res
      .status(403)
      .send(
        "잘못된 접근입니다. [파라메터가 넘어오지 않았거나 올바르지 않습니다.]"
      );
  }
});

const api = axios.create({
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 2000,
});
