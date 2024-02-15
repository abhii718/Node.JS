// const http = require("http");

// const port = process.env.PORT || 3000; // Use port 3000 if PORT environment variable is not set

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html"); // Corrected content type
//   res.end(
//     "<h1>This is Code With Harry</h1><p>Hey, this is the way to rock the world!</p>"
//   );
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

import { createServer } from "http";

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
    //1:48:20 harry video duration
    console.log(req.url) 
    
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1>This is Code With Harry</h1><p>Hey, this is the way to rock the world!</p>"
  );
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
