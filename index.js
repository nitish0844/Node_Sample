const http = require("http");

const server = http.createServer((req, res) => {
  // Set the response header to indicate that HTML content will be sent
  res.setHeader("Content-Type", "text/html");

  // Check if the request path is '/api'
  if (req.url === "/api") {
    // Sample data
    const data = {
      name: "John Doe",
      age: 30,
      city: "Sample City",
    };

    // Convert the sample data to a JSON string
    const jsonData = JSON.stringify(data);

    // Send the JSON data as the response
    res.end(jsonData);
  } else {
    // If the request path is not '/api', send a simple HTML response
    res.end("<html><body><h1>Hello, this is a simple API!</h1></body></html>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
