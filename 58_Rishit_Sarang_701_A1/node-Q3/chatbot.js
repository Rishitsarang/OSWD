// chatbot.js
const responses = {
  hello: "Hello! Welcome to the Bookstore chatbot. How can I help you today?",
  books: "We have fiction, non-fiction, fantasy, mystery, and science fiction books.",
  authors: "Some popular authors: J.K. Rowling, George Orwell, Agatha Christie.",
  genres: "We offer books in genres like thriller, romance, fantasy, and biography.",
  bye: "Goodbye! Thanks for chatting with the Bookstore bot.",
};

function chatbotResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return responses.hello;
  }
  if (text.includes("book")) {
    return responses.books;
  }
  if (text.includes("author")) {
    return responses.authors;
  }
  if (text.includes("genre")) {
    return responses.genres;
  }
  if (text.includes("bye") || text.includes("exit")) {
    return responses.bye;
  }
  return "Sorry, I didn't understand that. Can you ask something else about books?";
}

module.exports = chatbotResponse;
