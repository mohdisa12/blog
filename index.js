import express from "express";
import bodyparser from "body-parser";
import pg from "pg";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieparser from "cookie-parser"


const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "Allahabad@123",
  port: 5433
});

db.connect();

const getList = async () => {
  try {
    const response = await db.query("SELECT * from detail");
    return response.rows;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

app.get("/", async (req, res) => {
  //const blogs = await getList();
  res.json('It me');
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  console.log(username);
  const email = req.body.email;
  console.log(email);
  const password = req.body.password;
  console.log(password);

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.json("Email already exists. Try logging in.");
    } else {

      const result = await db.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
        [username, email, password]
      );

    }
    res.status(200).json("User has been created");

  } catch (err) {
    res.json(err);
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  console.log(username);
  const loginpassword = req.body.password;
  console.log(loginpassword);
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      if (storedPassword === loginpassword) {
        res.status(200).json("User has been logged in.");
      }
      else {
        res.status(401).json("Invalid password.");
      }
    }
    else {
      res.status(404).json("Username not found.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal server error.");
  }
  const token = jwt.sign({ id: user.id }, "jwtkey");
});



app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});