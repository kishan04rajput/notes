import { QAReturn } from "../components/QAReturn";

export const ReactPage = () => {
  const QA = [
    {
      Q: `What is middleware?`,
      A: `Middleware in the context of web development refers to functions or pieces of code that sit between the client request and the server response in an application's request-response cycle. They can perform tasks such as modifying request and response objects, executing additional code, or terminating the request-response cycle. (They are express functions.)`,
    },
    {
      Q: `What is promise?`,
      A: `Promise is an object that represents the eventual completion of an asynchronous event. It has three states pending, fulfilled, and rejected.`,
    },
    {
      Q: `What is redux?`,
      A: `Redux is a predictable state container for JavaScript applications.`,
    },
    {
      Q: `What is redux thunk?`,
      A: `Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. This function can then perform asynchronous operations (like fetching data from an API) and dispatch actions based on the results of those operations.`,
    },
    {
      Q: `What is a redux logger?`,
      A: `Redux Logger is a middleware for Redux that logs every action and the resulting state change to the console. This is very useful for debugging purposes, as it provides a clear and readable trace of what actions are being dispatched and how they affect the state.`,
    },
    {
      Q: `What is redux promise?`,
      A: `Redux Promise is a middleware for Redux that allows you to dispatch actions that return a promise. When the promise resolves, it automatically dispatches an action with the resolved value as the payload.`,
    },
    {
      Q: `What is react and why do we use react?`,
      A: `React is a JavaScript library for building user interfaces, developed by Facebook. It's used for creating interactive, dynamic, and reusable UI components for web and mobile applications.`,
    },
    {
      Q: `What is local storage?`,
      A: `It’s a web storage that allows you to store data across browser sessions, and the data does not expire even after the browser is closed. Size is of 10MB.`,
    },
    {
      Q: `What is session storage?`,
      A: `It’s similar to LocalStorage but the data stored gets cleared when the page session ends, i.e., when the user closes the browser.`,
    },
    {
      Q: `What are cookies?`,
      A: `These are small text files stored on the user’s computer by the browser, primarily used for maintaining session state, and tracking user behavior, and can be sent back to the server with every HTTP request. Size is 4KB.`,
    },
    {
      Q: `What is a hook?`,
      A: `In React, a hook is a special function that lets you tap into React's state and lifecycle features from functional components.`,
    },
    {
      Q: `What is the useState hook?`,
      A: `useState is a React Hook that allows to add state variables in functional components.`,
    },
    {
      Q: `What is useContext hook?`,
      A: `useContext is a built-in Hook in React that allows to consume data from a context provider. useContext provides a way to consume context directly from functional components without having to wrap them with the Context Consumer Component.`,
    },
    {
      Q: `What is useRef hook?`,
      A: `The useRef is a built-in hook in React that allows you to persist values between renders. It’s primarily used to access DOM elements directly and store mutable values that do not cause a re-render when updated. It returns an object with the current key.`,
    },
    {
      Q: `What is the useReducer hook?`,
      A: `The useReducer is a built-in hook in React that provides an alternative to the useState hook. It’s used when the state of a component is complex and requires more than one state variable.`,
    },
    {
      Q: `What is the useMemo hook?`,
      A: `The useMemo is a built-in hook in React that allows you to cache the result of a calculation between re-renders. It’s primarily used to optimize performance by preventing unnecessary recalculations when unrelated state changes.`,
    },
    {
      Q: `useMemo vs useEffect?`,
      A: `useMemo returns a memoized value and run at the time of rendering page while useEffect is used for side effects tasks and does not return any value, and it runs after rendering is done.`,
    },
    {
      Q: `What is useCallback hook?`,
      A: `The useCallback hook in React is used to memoize a callback function, preventing it from being recreated on every render unless its dependencies change.`,
    },
    {
      Q: `useMemo vs useCallback?`,
      A: `useMemo and useCallback are both hooks provided by React that are used to optimize performance by memoizing values or functions.`,
    },
    {
      Q: `What is custom hooks in react?`,
      A: `Custom hooks in React are reusable JavaScript functions that utilize built-in hooks to encapsulate logic and state management for functional components.`,
    },
    {
      Q: `What are keys?`,
      A: `Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.`,
    },
    {
      Q: `What is DOM?`,
      A: `DOM is a structural representation of HTML elements.`,
    },
    {
      Q: `Where is DOM stored?`,
      A: `The DOM is not stored in any physical file or database. Instead, it’s a logical construct created by the browser when a web page is loaded.`,
    },
    {
      Q: `What is virtual DOM?`,
      A: `Virtual DOM is an abstract and lightweight copy of DOM.`,
    },
    {
      Q: `Where is virtual DOM stored?`,
      A: `The Virtual DOM isn’t stored as a visible part of your application; rather, it’s an internal data structure used by React for its diffing and rendering process.`,
    },
    {
      Q: `Difference between virtual dom and actual dom?`,
      A: `The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model) maintained by React. It exists entirely in memory and is used to improve performance by minimizing direct manipulation of the actual DOM. Changes are first applied to the Virtual DOM, which then calculates the most efficient way to update the actual DOM, reducing reflows and repaints and thereby improving application speed and responsiveness.`,
    },
    {
      Q: `What is react-router?`,
      A: `React Router is a popular library for React applications that enables declarative routing by providing components to manage navigation and rendering of different views based on the URL.`,
    },
    {
      Q: `What is flux?`,
      A: `Flux is an architectural pattern used in React applications for managing state in a more predictable manner. It involves unidirectional data flow where data flows in a single direction through the application, making state management more maintainable and easier to reason about.`,
    },
    {
      Q: `What is use of render method?`,
      A: `In React, the render method is used to define what the UI should look like based on the current state and props of a component. It returns a React element (typically JSX) that describes the UI of the component.`,
    },
    {
      Q: `What is the role of react in software development?*`,
      A: `React simplifies the development of interactive UIs, promotes reusable components, and enhances performance with virtual DOM.`,
    },
    {
      Q: `What is react?`,
      A: `React is a JavaScript library for building user interfaces, developed by Facebook.`,
    },
    {
      Q: `What is single page application?`,
      A: `A single page application loads a single HTML page and dynamically updates content as the user interacts with the app.`,
    },
    {
      Q: `What are the advantages of react?*`,
      A: `Advantages include reusable components, virtual DOM for better performance, and a strong community and ecosystem.`,
    },
    {
      Q: `What are disadvantages of react?`,
      A: `Disadvantages include a steep learning curve, fast-paced changes, and reliance on third-party libraries.`,
    },
    {
      Q: `What is the difference between react and angular?`,
      A: `React is a library focused on UI, while Angular is a comprehensive framework offering a complete solution for frontend development.`,
    },
    {
      Q: `What is DOM?`,
      A: `DOM (Document Object Model) is a programming interface for HTML and XML documents, representing the page structure as a tree of objects.`,
    },
    {
      Q: `What is the difference between DOM and vDOM?*`,
      A: `DOM is the actual structure of the HTML document, while virtual DOM is a lightweight copy used by React to optimize updates.`,
    },
    {
      Q: `What are react components?*`,
      A: `React components are independent, reusable pieces of UI, defined as JavaScript functions or classes.`,
    },
    {
      Q: `How to setup a react project?`,
      A: `Set up a React project using Create React App with the command: npx create-react-app my-app.`,
    },
    {
      Q: `What is npm? What is the role of node_modules folder?`,
      A: `npm is a package manager for JavaScript, and the node_modules folder contains all the project's installed dependencies.`,
    },
    {
      Q: `What is the role of the public folder in react?`,
      A: `The public folder contains static assets like images and the index.html file that the app renders.`,
    },
    {
      Q: `What is the role of the src folder in react?`,
      A: `The src folder contains the source code for the React components and application logic.`,
    },
    {
      Q: `What is the role of the index.html page in react?*`,
      A: `index.html serves as the single HTML file that React injects components into, making it the root of the React app.`,
    },
    {
      Q: `What is the role of the App.js file in react?*`,
      A: `App.js defines the main App component, which serves as the root component containing other components.`,
    },
    {
      Q: `What is the role of function and return in App.js?`,
      A: `The function defines the component's behavior, and the return statement specifies the JSX to render.`,
    },
    {
      Q: `Can we have a function without return inside App.js?`,
      A: `No, a React component function must return JSX or null.`,
    },
    {
      Q: `What is the role of export default inside App.js?`,
      A: `export default makes the App component available for import in other files.`,
    },
    {
      Q: `What is the role of index.js file, ReactDOM, and Render method in react?`,
      A: `index.js is the entry point, ReactDOM renders components to the DOM, and render() specifies what to render and where.`,
    },
    {
      Q: `How does the react app load and display components in the browser?`,
      A: `The React app is initialized by index.js, which uses ReactDOM to render components starting from App.js into the root div in index.html.`,
    },
    {
      Q: `What is JSX?`,
      A: `JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe UI elements.`,
    },
    {
      Q: `What are the advantages of JSX?*`,
      A: `JSX makes code easier to understand and maintain by combining markup with logic, and it offers powerful error messages and warnings.`,
    },
    {
      Q: `Can a browser read the JSX file? What is babel?`,
      A: `Browsers can't read JSX directly; Babel is a transpiler that converts JSX into plain JavaScript.`,
    },
    {
      Q: `What is a transpiler?`,
      A: `A transpiler converts code from one language or version to another, like JSX to JavaScript.`,
    },
    {
      Q: `Is it possible to use JSX without React?`,
      A: `No, JSX is designed to be used with React.`,
    },
    {
      Q: `What is a fragment in React?`,
      A: `A fragment is a way to group multiple elements without adding extra nodes to the DOM.`,
    },
    {
      Q: `How do you iterate over a list in JSX? What is the use of the map method?`,
      A: `Iterate over a list using the map method, which returns an array of JSX elements.`,
    },
    {
      Q: `What are props in JSX?*`,
      A: `Props are inputs to components that allow data to be passed from parent to child components.`,
    },
    {
      Q: `What is a spread operator?`,
      A: `The spread operator (...) allows an iterable to expand in places where multiple elements are expected.`,
    },
    {
      Q: `What are the types of conditional rendering in JSX?*`,
      A: `Conditional rendering can be done using if statements, ternary operators, and logical && operators.`,
    },
    {
      Q: `Explain the building blocks of React?`,
      A: `The five main building blocks of React are:

Components: These are reusable blocks of code that return HTML.
JSX: It stands for JavaScript and XML and allows to write HTML in React.
Props and State: props are like function parameters and State is similar to variables.
Context: This allows data to be passed through components as props in a hierarchy.
Virtual DOM: It is a lightweight copy of actual DOM which makes DOM manipulation easier.`,
    },
    {
      Q: ` What is Reconciliation in React JS?`,
      A: `React assesses the necessity for a real DOM update when there’s a change in a component’s props or state. This evaluation involves comparing the newly returned element with the one previously displayed. If they are not equal, React proceeds to update the DOM. This process is referred to as reconciliation`,
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

  return <QAReturn QA={QA} />;
};
