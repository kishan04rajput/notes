import React from "react";

export const JavascriptPage = () => {
  const QA = [
    {
      Q: `What is hoisting in javascript?`,
      A: `Hoisting in JavaScript is a behaviour where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that regardless of where variables and functions are declared within a scope, they are available for use throughout the entire scope, even before they are explicitly declared in the code.`,
    },
    {
      Q: `Slice vs splice`,
      A: `slice is a method that returns a shallow copy of a portion of an array into a new array. It does not modify the original array. splice is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.`,
    },
    {
      Q: `What is a callback function?`,
      A: `A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete a specific task.`,
    },
    {
      Q: `What is an event loop?`,
      A: `The event loop is a core concept in JavaScript that allows asynchronous callbacks to be executed, enabling non-blocking operations by continuously checking the message queue and executing available tasks.`,
    },
    {
      Q: `What is higher-order function?`,
      A: `A higher-order function is a function that either takes one or more functions as arguments, returns a function, or both.`,
    },
    {
      Q: `what is arrow function?`,
      A: `An arrow function (or fat arrow function) is a concise way to write anonymous function expressions in JavaScript, using the syntax () => {}. It’s commonly used for concise callbacks and improved readability.`,
    },
    {
      Q: `what is jsx?`,
      A: `JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside a JavaScript file. It’s commonly used with React to create user interfaces.`,
    },
    {
      Q: `what is babel in react?`,
      A: `Babel is a JavaScript compiler used in React to transform modern JavaScript (ES6+) and JSX syntax into a backward-compatible version for older browsers.`,
    },
    {
      Q: `can we run jsx directly in browser?`,
      A: `JSX isn’t directly supported by browsers, requiring conversion by tools like Babel to transform JSX into valid JavaScript.`,
    },
    {
      Q: `What is JavaScript?`,
      A: `JavaScript is a versatile, high-level programming language used for adding interactivity and dynamic behavior to web pages.`,
    },
    {
      Q: `What are data types in JavaScript? What are primitive data types?`,
      A: `Data types in JavaScript include primitive (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and non-primitive (Objects, Arrays, Functions`,
    },
    {
      Q: `What is the difference between primitive and non-primitive data types?`,
      A: `Primitive data types are immutable and stored by value, while non-primitive data types are mutable and stored by reference.`,
    },
    {
      Q: `What are arrays, functions, and objects?`,
      A: `Arrays are ordered lists of values, functions are blocks of code designed to perform tasks, and objects are collections of key-value pairs for structured data.`,
    },
    {
      Q: `What is scope in JavaScript?`,
      A: `Scope determines the visibility and accessibility of variables within different parts of the code (global, function, block).`,
    },
    {
      Q: `What is the difference between var, let, and const in JavaScript?`,
      A: `var is function-scoped and can be re-declared and updated, let is block-scoped and can be updated but not re-declared, const is block-scoped and cannot be updated or re-declared.`,
    },
    {
      Q: `What is a loop? What are the types of loops in JavaScript?`,
      A: `A loop is a control structure that repeats a block of code. Types include for, while, do...while, for...of, and for...in.`,
    },
    {
      Q: `What is the difference between for, while, and do...while loops?`,
      A: `for executes a block of code a set number of times, while executes as long as a specified condition is true, and do...while executes at least once and then repeats while the condition is true.`,
    },
    {
      Q: `What is the difference between for...of and for...in loops in JavaScript?`,
      A: `for...of iterates over iterable objects like arrays, returning values, while for...in iterates over object properties, returning keys.`,
    },
    {
      Q: `What is the forEach method? Compare it with for...of and for...in loops in JavaScript?`,
      A: `forEach executes a provided function once for each array element. for...of iterates values, for...in iterates keys, and forEach calls a function for each array element.`,
    },
    {
      Q: `What is the difference between == and === in JavaScript?`,
      A: `== compares values with type coercion, while === compares values and types without coercion.`,
    },
    {
      Q: `What are the types of functions in JavaScript? What are named and anonymous functions?`,
      A: `JavaScript functions can be named (having a specific name, e.g., function myFunction() {}) or anonymous (without a name, often assigned to variables or used as arguments).`,
    },
    {
      Q: `What is a function expression in JS?`,
      A: `A function expression defines a function inside an expression, assigning it to a variable (e.g., const myFunction = function() {}).`,
    },
    {
      Q: `What are callback functions?`,
      A: `Callback functions are functions passed as arguments to other functions, to be executed later within the containing function.`,
    },
    {
      Q: `When to use callback functions in real applications?`,
      A: `Use callback functions for asynchronous operations, such as handling responses from API calls, reading files, or processing user events.`,
    },
    {
      Q: `What is the use of event handling in JS?`,
      A: `Event handling allows JavaScript to detect and respond to user actions like clicks, keystrokes, or mouse movements, enhancing interactivity.
Event handling allows JavaScript to detect and respond to user actions like clicks, keystrokes, or mouse movements, enhancing interactivity.`,
    },
    {
      Q: `What are higher-order functions?`,
      A: `Higher-order functions are functions that can take other functions as arguments or return them as results, enabling functional programming patterns.`,
    },
    {
      Q: `What are asynchronous operations in JS?`,
      A: `Asynchronous operations allow JavaScript to perform tasks like fetching data from a server or reading files without blocking the execution of other code.`,
    },
    {
      Q: `What are promises in JS?`,
      A: `Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value, providing a cleaner way to handle asynchronous code.`,
    },
    {
      Q: `How to implement promises in JS?`,
      A: `Implement promises using the new Promise constructor, which takes a function with resolve and reject parameters (e.g., const promise = new Promise((resolve, reject) => { ... });).`,
    },
    {
      Q: `When to use promises in real applications?`,
      A: `Use promises for handling asynchronous operations like API calls, database queries, and other tasks that involve waiting for a result before continuing.`,
    },
    {
      Q: `What are classes and objects in JS?`,
      A: `Classes are templates for creating objects, encapsulating data and behavior. Objects are instances of classes, containing properties and methods defined by the class.`,
    },
    {
      Q: `What is the purpose of this in JS?`,
      A: `The this keyword refers to the current context or object in which the code is executing, often used in methods to access properties and other methods of the object.`,
    },
    {
      Q: ``,
      A: ``,
    },
    {
      Q: ``,
      A: ``,
    },
    {
      Q: ``,
      A: ``,
    },
    {
      Q: ``,
      A: ``,
    },
    {
      Q: ``,
      A: ``,
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
