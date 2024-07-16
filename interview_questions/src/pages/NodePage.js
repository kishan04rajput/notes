import React from "react";

export const NodePage = () => {
  const QA = [
    {
      Q: `What is a node?`,
      A: `Node.js is a runtime environment that allows you to run JavaScript code on the server side. It uses the V8 JavaScript engine, which is the same engine used by Google Chrome, to execute JavaScript code outside of a web browser. Node.js is built on an event-driven, non-blocking I/O model, which makes it lightweight and efficient for handling concurrent connections and I/O-heavy operations.`,
    },
    {
      Q: `Why is node used for high-scalability apps?`,
      A: `Node is used for high-scalability apps due to its event-driven, non-blocking I/O model. This allows Node.js to handle a large number of simultaneous connections efficiently.`,
    },
    {
      Q: `What is buffer function?`,
      A: `The \`Buffer\` function is used to handle binary data directly, allowing the manipulation of raw bytes, which is especially useful for working with streams and file I/O.`,
    },
    {
      Q: `What is node_env?`,
      A: `\`NODE_ENV\` is an environment variable in Node.js used to specify the environment in which an application is running, such as \`development\`, \`production\`, or \`test\`.`,
    },
    {
      Q: `What is REPL in Node.js?`,
      A: `\`REPL\` in Node.js stands for Read-Eval-Print Loop, an interactive shell that processes user inputs, evaluates the results, and prints the output, allowing for real-time coding and testing.`,
    },
    {
      Q: `What is Node.js?*`,
      A: `Node.js is a runtime environment that allows you to run JavaScript on the server side.`,
    },
    {
      Q: `How Node is a runtime environment on server side? What is V8?`,
      A: `Node.js provides a runtime environment for executing JavaScript on the server, using the V8 engine for fast performance.`,
    },
    {
      Q: `What is the difference between Runtime environment & Framework?`,
      A: `A runtime environment provides the necessary platform for code execution, while a framework offers predefined structures and tools for development.`,
    },
    {
      Q: `What is the difference between Node.js & Express.js?`,
      A: `Node.js is a runtime environment for executing JavaScript on the server, while Express.js is a web application framework built on top of Node.js.`,
    },
    {
      Q: `What are the differences between Client-Side(Browser) & Server-Side(Node.js)?`,
      A: `Client-side runs in the browser, handling UI and interactions, while server-side runs on the server, managing data, logic, and APIs.`,
    },
    {
      Q: `What are the 7 Main Features of Node.js?*`,
      A: `Features include asynchronous event-driven architecture, single-threaded nature, fast execution with V8, non-blocking I/O, scalability, module system, and cross-platform compatibility.`,
    },
    {
      Q: `What is Single Threaded Programming?`,
      A: `Single-threaded programming executes all tasks in a single sequence on one thread.`,
    },
    {
      Q: `What is Synchronous Programming?`,
      A: `Synchronous programming processes tasks sequentially, waiting for each task to complete before moving to the next.`,
    },
    {
      Q: `What is Multi Threaded Programming?`,
      A: `Multi-threaded programming uses multiple threads to execute tasks concurrently, improving performance for parallel tasks.`,
    },
    {
      Q: `What is Asynchronous Programming?*`,
      A: `Asynchronous programming allows tasks to run independently, enabling the program to continue execution without waiting for previous tasks to complete.`,
    },
    {
      Q: `What is the difference between Synchronous & Asynchronous programming?`,
      A: `Synchronous programming waits for each task to complete before moving on, while asynchronous programming allows tasks to run concurrently.`,
    },
    {
      Q: `What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?`,
      A: `Events are signals that something has happened, Event Emitter is a module for handling events, Event Queue holds events to be processed, Event Loop manages execution of asynchronous events, and Event Driven is a programming paradigm using events.`,
    },
    {
      Q: `What are the main features & advantages of Node.js?`,
      A: `Features include non-blocking I/O, event-driven architecture, fast execution with V8, scalability, and a vast ecosystem of modules.`,
    },
    {
      Q: `What are the disadvantages of Node?`,
      A: `Disadvantages include single-threaded limitations, callback hell, and immature tooling for some use cases.`,
    },
    {
      Q: `How to setup node.js project?`,
      A: `Set up a Node.js project using npm init to create a package.json file and manage dependencies.`,
    },
    {
      Q: `What is NPM? What is the role of node_modules folder?`,
      A: `NPM is a package manager for JavaScript, and the node_modules folder contains installed dependencies for the project.`,
    },
    {
      Q: `What is the role of package.json file in Node?`,
      A: `package.json holds metadata about the project, including dependencies, scripts, and configuration.`,
    },
    {
      Q: `What are Modules in Node?`,
      A: `Modules are reusable pieces of code that can be imported and exported to manage functionality in Node.js.`,
    },
    {
      Q: `How many ways are there to Export a module?`,
      A: `Modules can be exported using module.exports or exports in Node.js.`,
    },
    {
      Q: `What will happen if you don't export the module?`,
      A: `If you don't export a module, its functions and variables will not be accessible from other files.`,
    },
    {
      Q: `How to import single and multiple functions from a module?`,
      A: `Import single and multiple functions using require('moduleName').functionName or destructuring: const { func1, func2 } = require('moduleName').`,
    },
    {
      Q: `What is module wrapper function?`,
      A: `The module wrapper function is a hidden function that Node.js uses to wrap each module, providing scope and access to module-specific variables.`,
    },
    {
      Q: `What are the Types of modules in Node?`,
      A: `Node.js modules include core modules, local modules, and third-party modules.`,
    },
    {
      Q: `What are the Top 5 built in modules commonly used in node projects?`,
      A: `Top built-in modules include fs, path, http, os, and events.`,
    },
    {
      Q: `Explain the role of fs module? Name some functions of it?`,
      A: `The fs module provides file system operations; functions include readFile, writeFile, and appendFile.`,
    },
    {
      Q: `Explain the role of path module? Name some functions of it?`,
      A: `The path module provides utilities for file and directory paths; functions include join, resolve, and basename.`,
    },
    {
      Q: `Explain the role of OS module? Name some functions of it?`,
      A: `The os module provides operating system-related utilities; functions include platform, arch, and freemem.`,
    },
    {
      Q: `Explain the role of events module? How to handle events in Node?`,
      A: `The events module allows handling events with EventEmitter; create an instance, then use on to listen and emit to trigger events.`,
    },
    {
      Q: `What are Event Arguments?`,
      A: `Event arguments are parameters passed to event listeners when an event is emitted.`,
    },
    {
      Q: `What is the difference between a function and an event?`,
      A: `A function is a block of code executed when called, while an event is a signal that triggers event listeners.`,
    },
    {
      Q: `What is the role of http module in node?*`,
      A: `The http module provides functionalities for creating HTTP servers and handling HTTP requests and responses.`,
    },
    {
      Q: `What is the role of createServer method of http module?`,
      A: `The createServer method of the http module creates an HTTP server that can listen to requests and send responses.`,
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
    <div>
      {QA.map((item, index) => (
        <div key={index}>
          <QACard question={item.Q} answer={item.A} />
        </div>
      ))}
    </div>
  );
};
