import { QAReturn } from "../components/QAReturn";

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
            Q: `What is the event loop?*`,
            A: `The event loop is a mechanism that handles the execution of asynchronous operations in JavaScript. It continuously checks the call stack and the task queue (also known as the message queue). If the call stack is empty, the event loop pushes the next function from the task queue to the call stack for execution, ensuring non-blocking behavior in the language.`,
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
            A: `Event handling allows JavaScript to detect and respond to user actions like clicks, keystrokes, or mouse movements, enhancing interactivity.`,
        },
        // {
        //   Q: `What are higher-order functions?`,
        //   A: `Higher-order functions are functions that can take other functions as arguments or return them as results, enabling functional programming patterns.`,
        // },
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
            A: `The this keyword is used to access the value of the current context or object in which the code is executing, often used in methods to access properties and other methods of the object.`,
        },
        {
            Q: `undefined vs not defined`,
            A: `undefined: A variable that has been declared but not assigned a value is undefined. It is a property of the global object.
      not defined: If a variable has not been declared, accessing it will result in a ReferenceError, indicating the variable is not defined.`,
        },
        {
            Q: `What is a lexical environment?`,
            A: `A lexical environment is a structure that holds the identifiers (variable/function names) and their corresponding values in the scope where the code is written. It includes the current environment and its parent environment (outer scope), forming a scope chain.`,
        },
        {
            Q: `What is a closure?`,
            A: `A closure is a function that retains access to its lexical environment, including the variables declared in its outer scope, even after the outer function has finished executing. Closures are created every time a function is created.`,
        },
        {
            Q: `What is a scope chain?`,
            A: `The scope chain is a series of lexical environments that JavaScript searches to resolve variable names. It starts with the innermost scope where the variable is used and proceeds outwards to the global scope.`,
        },
        {
            Q: `What is the temporal dead zone?`,
            A: `The temporal dead zone (TDZ) refers to the time between the entering of a block and the point where a variable declared with let or const is initialized. During the TDZ, accessing these variables results in a ReferenceError.`,
        },
        {
            Q: `What is the window object?`,
            A: `The window object is the global object in the browser environment. It represents the browser's window and provides functions and properties for controlling the browser window, interacting with the DOM, and handling events.`,
        },
        {
            Q: `What is shadowing in JavaScript?`,
            A: `Shadowing occurs when a variable declared within a certain scope (like a function or block) has the same name as a variable declared in an outer scope. The inner variable shadows the outer variable within its scope.`,
        },
        {
            Q: `What is memoization?`,
            A: `Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. It helps in avoiding the repeated calculation of the same results`,
        },
        {
            Q: `What is a once function?`,
            A: `A "once" function ensures that a given function is executed at most once, regardless of how many times it is called. After the first call, subsequent calls return the result of the first invocation without re-executing the function.`,
        },
        {
            Q: `What is currying?`,
            A: `Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument. It allows the partial application of functions.
      function add(a) {
        return function(b) {
          return a + b;
        };
      }

      const addFive = add(5);
      console.log(addFive(10)); // 15`,
        },
        {
            Q: `What are first-class functions in JavaScript?`,
            A: `First-class functions are functions that can be treated like any other value. They can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures.`,
        },
        {
            Q: `What is the difference between function statement, function expression, and function declaration?`,
            A: `Function Declaration: Defines a named function and is hoisted to the top of its scope.
      function foo() {
  // function body
}
Function Expression: Defines a function as part of an expression, either named or anonymous. Not hoisted.
const bar = function() {
  // function body
};
Function Statement: This is a commonly used term, but it's typically incorrect. It often refers to function declarations. There isn't a separate category called "function statements."`,
        },
        {
            Q: `What is a named function expression?`,
            A: `A named function expression is a function expression with a name. This name is only available within the function's scope, making it useful for recursion or self-referencing.
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};`,
        },
        {
            Q: `What are first-class citizens?`,
            A: `In JavaScript, first-class citizens refer to entities (functions, objects, etc.) that can be used in all the contexts available to other entities. Functions are first-class citizens because they can be assigned to variables, passed as arguments, and returned from other functions.`,
        },
        {
            Q: `What are web APIs?`,
            A: `Web APIs are built-in interfaces provided by the browser or other environments that allow developers to interact with the browser, manipulate the DOM, make network requests, store data locally, and perform other tasks beyond the core JavaScript language capabilities. Examples include the DOM API, Fetch API, Web Storage API, and more.`,
        },
        {
            Q: "What is the microtask queue?",
            A: "The microtask queue is a queue where tasks that need to be executed after the currently executing script, but before any tasks in the callback queue, are stored. Examples include tasks generated by Promises, `MutationObserver` callbacks, and the `process.nextTick()` in Node.js.",
        },
        {
            Q: "What is the callback queue?",
            A: "The callback queue, also known as the task queue, holds tasks that are scheduled to be executed after the currently executing script. These tasks include events like `setTimeout`, `setInterval`, and event handlers.",
        },
        {
            Q: "What is the call stack?",
            A: "The call stack is a data structure that keeps track of function calls in a program. When a function is called, it's added to the top of the stack. When the function returns, it is removed from the stack.",
        },
        {
            Q: "What comes in the microtask queue?",
            A: "Tasks like Promise callbacks, `MutationObserver` callbacks, and `process.nextTick()` (in Node.js) go into the microtask queue.",
        },
        {
            Q: "What comes in the callback queue?",
            A: "Tasks such as `setTimeout`, `setInterval`, and DOM event callbacks are placed in the callback queue.",
        },
        {
            Q: "What is a MutationObserver?",
            A: "A `MutationObserver` is an API that allows you to listen for changes to the DOM tree, such as when nodes are added or removed. The callbacks from `MutationObserver` are placed in the microtask queue.",
        },
        {
            Q: "What is the task queue?",
            A: "The task queue, often synonymous with the callback queue, holds tasks that are to be executed after the currently executing script has completed, like callbacks from `setTimeout`, `setInterval`, and I/O events.",
        },
        {
            Q: "What is the starvation of a task in the callback queue?",
            A: "Starvation occurs when tasks in the callback queue are delayed indefinitely because tasks in the microtask queue are continually added and executed first, blocking the callback queue from being processed.",
        },
        {
            Q: "What is ECMAScript?",
            A: "ECMAScript is a standard for scripting languages, including JavaScript. It defines the core language features, while JavaScript adds more features like the Document Object Model (DOM).",
        },
        {
            Q: "What is the concurrency model in JavaScript?",
            A: "JavaScript's concurrency model is based on the event loop, which processes one task at a time, non-blocking I/O, and queues like the callback queue and microtask queue to manage asynchronous operations.",
        },
        {
            Q: "What is callback hell?",
            A: "Callback hell refers to the situation where callbacks are nested within other callbacks, making the code difficult to read and maintain. It often leads to what is known as the 'pyramid of doom'.",
        },
        {
            Q: "What is the pyramid of doom?",
            A: "The pyramid of doom is a term used to describe deeply nested callback functions, which can make the code difficult to follow and maintain. It is often seen as a result of callback hell.",
        },
        {
            Q: "What is inversion of control?",
            A: "Inversion of control refers to the situation where a piece of code surrenders control of its flow to another code, such as passing a callback function to an API that decides when to execute it.",
        },
        {
            Q: "Why are promises important?",
            A: "Promises are important because they help manage asynchronous operations more effectively, avoiding callback hell by allowing chaining of asynchronous tasks and providing more readable and maintainable code.",
        },
        {
            Q: "How to create a promise?",
            A: "A promise is created using the `Promise` constructor, which takes a function as an argument with two parameters: `resolve` and `reject`. For example: `let promise = new Promise((resolve, reject) => { /* code */ });`",
        },
        {
            Q: "What is Promise.all()?",
            A: "`Promise.all()` is a method that takes an array of promises and returns a single promise that resolves when all the promises in the array resolve, or rejects when any of them reject.",
        },
        {
            Q: "What is Promise.allSettled()?",
            A: "`Promise.allSettled()` returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.",
        },
        {
            Q: "What is Promise.race()?",
            A: "`Promise.race()` returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.",
        },
        {
            Q: "What is Promise.any()?",
            A: "`Promise.any()` returns a promise that resolves as soon as one of the promises in the array resolves. If all promises are rejected, it returns a promise that is rejected with an `AggregateError`.",
        },
        {
            Q: "What is async?",
            A: "`async` is a keyword used to declare a function that returns a `Promise`. It allows you to use the `await` keyword within the function to wait for asynchronous operations.",
        },
        {
            Q: "What is await?",
            A: "`await` is a keyword used inside an `async` function to pause execution until the promise it is awaiting is resolved or rejected.",
        },
        {
            Q: "What is setInterval()?",
            A: "`setInterval()` is a method that repeatedly calls a function with a fixed time delay between each call, continuing until it is cleared using `clearInterval()`.",
        },
        {
            Q: "What are promise APIs?",
            A: "Promise APIs in JavaScript include `Promise.all()`, `Promise.race()`, `Promise.any()`, `Promise.allSettled()`, and `Promise.resolve()` among others, which help in managing and orchestrating asynchronous tasks.",
        },
        {
            Q: "What is strict and non-strict mode?",
            A: "`strict mode` in JavaScript is a way to opt into a restricted variant of JavaScript, which catches common coding bugs. Non-strict mode, the default, allows for more lenient syntax and behavior.",
        },
        {
            Q: "What is call?",
            A: "`call()` is a method that allows you to call a function with a specified `this` value and arguments provided individually.",
        },
        {
            Q: "What is apply?",
            A: "`apply()` is similar to `call()`, but it allows you to pass arguments as an array, rather than individually.",
        },
        {
            Q: "What is bind?",
            A: "`bind()` creates a new function that, when called, has its `this` value set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.",
        },
        {
            Q: "What is the difference between a method and a function?",
            A: "A `method` is a function associated with an object and called on that object. A `function` is a standalone block of code that can be called independently of objects.",
        },
        {
            Q: `What is factory in js?`,
            A: `Factory is just a regular funciton that returns an object.`,
        },
        {
            Q: ``,
            A: ``,
        },
    ];

    return <QAReturn QA={QA} />;
};
