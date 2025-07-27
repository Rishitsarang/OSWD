// app.js
const readline = require("readline");
const chatbotResponse = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: "
});

console.log("Welcome to Bookstore Chatbot! (Type 'exit' or 'bye' to quit)");

rl.prompt();

rl.on("line", (line) => {
  const input = line.trim();

  const response = chatbotResponse(input);
  console.log("Bot:", response);

  if (input.toLowerCase() === "exit" || input.toLowerCase() === "bye") {
    rl.close();
  } else {
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log("Chatbot session ended.");
  process.exit(0);
});
