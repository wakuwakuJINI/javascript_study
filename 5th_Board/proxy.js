import express from "express"; // npm install express --save
import axios from "axios"; // npm install axios --save
import path from "path";
import cors from "cors";
import moment from "moment";
import mysql from "mysql2/promise";

//서버오류 해결=>
//mysql 패키지의 createConnection 메서드가 반환하는 객체가 Promise가 아님
//mysql 패키지의 query 메서드는 콜백 기반으로 작동Promise를 지원하지 않음.
//then 메서드를 사용할 수 없음.
//mysql2 패키지를 사용(promise 지원)
const app = express();
const __dirname = path.resolve(); // 현재 디렉토리

// MySQL 연결 설정
const connection = await mysql.createConnection({
  host: "localhost",
  user: "wakuwakujini", // MySQL 사용자 이름
  password: "ujini48513!", // MySQL 비밀번호
  database: "database",
});

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); // 모든 출처 허용 옵션. true 를 써도 된다.
app.use("/", express.static(__dirname));

app.listen(3000, () => {
  console.log("연결성공 !");
});

app.get("/", (req, res) => {
  res.send("루트에 대한 요청"); // 클라이언트로 보냄
});

app.get("/board/list", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/board/read/:seq", (req, res) => {
  res.sendFile(__dirname + "/read.html");
});
app.get("/board/write", (req, res) => {
  res.sendFile(__dirname + "/write.html");
});
app.get("/board/write/:seq", (req, res) => {
  res.sendFile(__dirname + "/write.html");
});

// 특정 게시글 보기
app.get("/api/board/:seq", async (req, res) => {
  const { seq } = req.params;
  try {
    const [data] = await connection.query(
      `SELECT seq,
        uname,
        title,
        REPLACE(textContent,'\n','<br>') as textContent,
        date_format(regDate,'%Y-%m-%d %H:%i:%s') as regDate,
        hit FROM board WHERE seq=?`,
      [seq]
    );

    if (data.length === 0) {
      return res.status(404).send("게시글을 찾을 수 없습니다...");
    }
    data[0].textContent = data[0].textContent.replace(/\n/g, "<br>");
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("서버오류");
  }
});

// 게시물 목록 조회
app.get("/board/select", async (req, res) => {
  try {
    const [data] = await connection.query(`
      select 
        seq,
        uname,
        title,
        date_format(regDate,'%Y-%m-%d %H:%i:%s') as regDate,
        hit
        from board`);
    for (const post of data) {
      await connection.execute("UPDATE board SET hit = hit + 1 WHERE seq = ?", [
        post.seq,
      ]);
    }
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("서버오류");
  }
});
//게시물 작성
app.post("/board/insert", async (req, res) => {
  let { seq, uname, title, textContent } = req.body;

  let regDate = moment().format("YYYY-MM-DD HH:mm:ss");

  try {
    const [lastSeq] = await connection.query(
      `SELECT seq FROM board ORDER BY seq DESC `
    );
    if (lastSeq.length === 0) {
      seq = 1;
    } else {
      seq = lastSeq[0].seq + 1;
    } //요거 때문에 안됐어 어뜨케에에에에에에에~~~

    await connection.execute(
      `INSERT INTO board (seq, uname, title, textContent, regDate, hit)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [seq, uname, title, textContent, regDate, 0]
    );

    res.redirect("/board/list");
  } catch (error) {
    console.error(error);
    res.status(500).send("Insert failed");
  }
});

// 게시물 수정
app.put("/api/board/update/:seq", async (req, res) => {
  const { seq } = req.params;
  const { uname, title, textContent } = req.body;

  try {
    const regDate = moment().format("YYYY-MM-DD HH:mm:ss");
    await connection.execute(
      `UPDATE board
        SET uname=?, title=?, textContent=?, regDate=? WHERE seq=?`,
      [uname, title, textContent, regDate, seq]
    );
    res.status(200).send("수정 성공");
  } catch (error) {
    console.error(error);
    res.status(500).send("수정 실패");
  }
});

//스키마 조회
app.get("/schema", async (req, res) => {
  try {
    const [schema] = await connection.query("SHOW TABLES");
    res.json(schema);
  } catch (error) {
    console.error(error);
    res.status(500).send(" 서버 오류 ");
  }
});

const api = axios.create({
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 2000,
});
