import express from "express";
import fetch from "node-fetch";

const app = express();
const TARGET_URL = "https://raceclocker.com/032840fb"; // твоя новая ссылка

app.get("/", async (req, res) => {
  try {
    const response = await fetch(TARGET_URL);
    const body = await response.text();
    res.send(body);
  } catch (error) {
    res.status(500).send("Ошибка прокси: " + error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Прокси запущен на порту ${PORT}`));
