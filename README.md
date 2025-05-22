📁 wanderlust-ai project files

=============================
📄 index.js
=============================
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

=============================
📄 package.json
=============================
{
  "name": "wanderlust-ai",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "node-fetch": "^2.6.7"
  }
}

=============================
📄 README.md
=============================
# Wanderlust AI 🌍✈️

**Wanderlust AI** is an intelligent travel assistant built with Node.js and OpenAI's GPT-4 model. It helps users explore travel ideas, ask trip-related questions, and receive dynamic responses—all via a simple backend API.

## 🚀 Features

- Chat with an AI that gives travel advice and inspiration
- Easy-to-deploy Node.js + Express server
- Integrates with OpenAI's GPT-4 model
- API endpoint at `/chat` that accepts user prompts

## 🌐 Live App

Once deployed, your app will be accessible at:

https://triangleenergy.info

## 📦 Tech Stack

- Node.js 20 LTS
- Express.js
- OpenAI API (GPT-4)
- Azure App Service (deployment)

## 🔧 Setup Instructions

1. Clone this repo  
2. Run `npm install`  
3. Create a `.env` file with your OpenAI API key  
4. Run `node index.js`  
5. POST a request to `/chat` with a prompt

## 🔐 Environment Variables

| Variable     | Description                  |
|--------------|------------------------------|
| `OPENAI_KEY` | Your OpenAI API secret key   |

## 📤 Deployment

This app is designed for deployment on **Azure App Service**, but it can also run on Vercel, Heroku, or any Node-compatible platform.

## 🧠 Author

**Arthur Rattray**  
Founder of Vilo Website Development  
📧 arthur@vilowebdevelopment.com
