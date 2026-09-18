'use strict'; const express = require('express'); 
const axios = require('axios'); 
const app = express(); 
app.use(express.json()); 
const PAGE_ACCESS_TOKEN = "YOUR_PAGE_ACCESS_TOKEN"; 
const VERIFY_TOKEN = "tamim_bot_123"; // 
Webhook verification app.get("/webhook", (req,res) => { const mode = req.query; const token = req.query.verify_token']; 
  const challenge = req.query .challenge']; 
  if (mode === "subscribe" && token === VERIFY_TOKEN) { res.status(200).send(challenge); } 
else { res.sendStatus(403); } }); // Messages endpoint app.post("/webhook", 
async (req,res) => { const body = req.body; if (body.object === "page") { for (const entry of body.entry) { for (const event of entry.messaging) { const sender = event.sender.id; 
                                                                                                                                                  if (event.message && event.message.text) { const msg = event.message.text .toLowerCase(); 
                                                                                                                                                                           let reply = "❌ Command not found. Type /help."; 
                                                                                                                                                                                            if (msg === "hi" || msg === "hello") { reply = "👋 
                                                                                                                                                                                              Welcome to NAM TAMIM CHAT BOT!"; } 
                                                                                                                                                                                            if (msg === "/help") { reply = "🤖 Commands:\n\n/start
