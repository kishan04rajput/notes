import React from "react";

export const ExpressPage = () => {
  const QA = [
    {
      Q: `What is express?`,
      A: `Express is a web application framework for Node.js, designed for building web applications and APIs.`,
    },
    {
      Q: `What is express.js and why is it used?`,
      A: `Express.js is a web application framework for Node.js, used to build web and mobile applications quickly and easily.`,
    },
    {
      Q: `How do you install express.js in node.js?`,
      A: `You can install express.js using npm with the command: npm install express.`,
    },
    {
      Q: `What are the key features of express.js?`,
      A: `Key features include routing, middleware support, templating, and easy integration with databases.`,
    },
    {
      Q: `How does express.js handle routing?`,
      A: `Express.js uses app.get(), app.post(), app.put(), and app.delete() methods to define routes for different HTTP requests.`,
    },
    {
      Q: `What is middleware in express.js?`,
      A: `Middleware functions are functions that execute during the lifecycle of a request to the server, used for tasks like logging, authentication, and error handling.`,
    },
    {
      Q: `How can you handle form data in express.js?`,
      A: `Use body-parser middleware to parse form data submitted via POST requests.`,
    },
    {
      Q: `How can you handle static files in express.js?`,
      A: `Serve static files using the express.static middleware.`,
    },
    {
      Q: `What is the purpose of the next() function in express.js middleware?`,
      A: `The next() function passes control to the next middleware function in the stack.`,
    },
    {
      Q: `How can you handle route parameters in express.js?`,
      A: `Route parameters are handled using the colon syntax in route paths, like /users/:id.`,
    },
    {
      Q: `How can you implement authentication in express.js?`,
      A: `Implement authentication using middleware libraries like Passport.js or JWT (JSON Web Tokens).`,
    },
    {
      Q: `Explain the concept of middleware chaining in express.js?`,
      A: `Middleware chaining is the process of executing multiple middleware functions in sequence for a single request.`,
    },
    {
      Q: `How can you handle errors in express.js?`,
      A: `Use error-handling middleware by defining a function with four arguments: err, req, res, next.`,
    },
    {
      Q: `What are route handlers in express.js?`,
      A: `Route handlers are functions that process requests and send responses for specific routes.`,
    },
    {
      Q: `How can you access request query parameters in express.js?`,
      A: `Access query parameters using req.query.`,
    },
    {
      Q: `How can you send JSON responses in express.js?`,
      A: `Send JSON responses using res.json() method.`,
    },
    {
      Q: `How can you handle file uploads in express.js?`,
      A: `Handle file uploads using middleware like multer.`,
    },
    {
      Q: `Explain the difference between app.get() and app.use() in express.js?`,
      A: `app.get() defines route handlers for GET requests, while app.use() defines middleware that can handle any type of HTTP request.`,
    },
    {
      Q: `How can you set response headers?`,
      A: `Set response headers using res.set() or res.header() methods.`,
    },
    {
      Q: `What is the purpose of app.locals object?`,
      A: `app.locals is used to store variables that can be accessed throughout the application.`,
    },
    {
      Q: `How can you implement session management?`,
      A: `Implement session management using express-session middleware.`,
    },
    {
      Q: `How can you handle Cross-Origin Resource Sharing (CORS)?`,
      A: `Handle CORS using the cors middleware.`,
    },
    {
      Q: `Explain the concept of route prefixing?`,
      A: `Route prefixing allows grouping routes under a common path prefix, often using express.Router().`,
    },
    {
      Q: `How can you implement rate limiting?`,
      A: `Implement rate limiting using middleware like express-rate-limit.`,
    },
    {
      Q: `What is the purpose of view engines?`,
      A: `View engines are used to render dynamic HTML pages.`,
    },
    {
      Q: `How can you implement authentication middleware?`,
      A: `Implement authentication middleware to protect routes, often using libraries like Passport.js.`,
    },
    {
      Q: `How can you handle redirects?`,
      A: `Handle redirects using res.redirect() method.`,
    },
    {
      Q: `How can you access request headers?`,
      A: `Access request headers using req.headers.`,
    },
    {
      Q: `How can you enable compression (gzip)?`,
      A: `Enable compression using compression middleware.`,
    },
    {
      Q: `What is the purpose of the app.route() method?`,
      A: `app.route() creates a chainable route handler for a specific path.`,
    },
    {
      Q: `How can you implement input validation?`,
      A: `Implement input validation using middleware like express-validator.`,
    },
    {
      Q: `How can you handle cookies?`,
      A: `Handle cookies using middleware like cookie-parser.`,
    },
    {
      Q: `How can you implement caching?`,
      A: `Implement caching using middleware like apicache.`,
    },
    {
      Q: `Explain the concept of view rendering?`,
      A: `View rendering generates HTML output from templates and data.`,
    },
    {
      Q: `How can you implement logging?`,
      A: `Implement logging using middleware like morgan.`,
    },
    {
      Q: `How can you handle async/await in express.js route handlers?`,
      A: `Use async functions and await expressions within route handlers to handle asynchronous code.`,
    },
    {
      Q: `How can you implement HTTPS (SSL/TLS)?`,
      A: `Implement HTTPS using https module and SSL/TLS certificates.`,
    },
    {
      Q: `What is the purpose of the express.Router class?`,
      A: `express.Router() is used to create modular, mountable route handlers.`,
    },
    {
      Q: `How can you handle websockets communication?`,
      A: `Handle websockets communication using libraries like socket.io.`,
    },
    {
      Q: `How can you implement input sanitization?`,
      A: `Implement input sanitization using libraries like express-validator or sanitize-html.`,
    },
    {
      Q: `How can you implement role-based access control (RBAC)?`,
      A: `Implement RBAC by defining roles and permissions, often with custom middleware.`,
    },
    {
      Q: `How can you handle session timeouts?`,
      A: `Handle session timeouts using express-session options like cookie.maxAge.`,
    },
    {
      Q: `How can you handle server-side rendering (SSR)?`,
      A: `Handle SSR by rendering HTML on the server before sending it to the client.`,
    },
    {
      Q: `How can you implement request throttling?`,
      A: `Implement request throttling using middleware like express-slow-down.`,
    },
    {
      Q: `How can you implement API versioning?`,
      A: `Implement API versioning by including version numbers in the URL path or headers.`,
    },
    {
      Q: `How can you implement pagination?`,
      A: `Implement pagination by handling query parameters like page and limit in route handlers.`,
    },
    {
      Q: `How can you implement websockets alongside traditional HTTP routes?`,
      A: `Use libraries like socket.io to handle websockets alongside traditional HTTP routes.`,
    },
    {
      Q: `How can you implement Server Sent Events (SSE)?`,
      A: `Implement SSE by setting the Content-Type to text/event-stream and sending events in a specific format.`,
    },
    {
      Q: `How can you handle file downloads?`,
      A: `Handle file downloads using res.download() or res.sendFile() methods.`,
    },
    {
      Q: `How can you implement request logging?`,
      A: `Implement request logging using middleware like morgan or winston.`,
    },
    {
      Q: `How to convert JSON into string?`,
      A: `Convert JSON to string using JSON.stringify() method.`,
    },
    {
      Q: ``,
      A: ``,
    },
  ];

  const QACard = ({ question, answer }) => (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        textAlign: "justify",
      }}
    >
      <div>
        <strong>Question:</strong> {question}
      </div>
      <div>
        <strong>Answer:</strong>{" "}
        {answer.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ marginTop: "11vh" }}>
      {QA.map((item, index) => (
        <div key={index}>
          <QACard question={item.Q} answer={item.A} />
        </div>
      ))}
    </div>
  );
};
