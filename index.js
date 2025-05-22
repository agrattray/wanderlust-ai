const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_KEY;

app.post("/chat", async (req, res) => {
  const prompt = req.body.prompt;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  res.send(data.choices?.[0]?.message?.content || "No reply");
});

app.get("/", (req, res) => res.send("Wanderlust AI is live!"));
app.listen(process.env.PORT || 3000);
