import React from "react";

export const HtmlPage = () => {
  const QA = [
    {
      Q: "What is the difference between relative and absolute position?",
      A: "Relative positioning moves the element based on its original position. Absolute positioning moves the element based on its nearest positioned ancestor or the initial containing block if no ancestor is positioned.",
    },
    {
      Q: "What is the use of iframe tag?",
      A: "The <iframe> tag is used to embed another HTML document within the current document, such as videos, maps, or external web pages. It allows for displaying content from different sources seamlessly within a webpage.",
    },
    {
      Q: "How to optimise the loading speed of the html webpage?",
      A: "To optimize the loading speed of an HTML webpage, you can minimize file sizes by compressing images and using minified CSS and JavaScript, and leverage browser caching and content delivery networks (CDNs) to reduce server response times and improve load distribution.",
    },
    {
      Q: "What is lazy loading?",
      A: "Lazy loading is a technique that defers the loading of non-critical resources, like images or iframes, until they are needed, such as when they come into the viewport. This helps improve initial page load times and overall performance by reducing the amount of content that needs to be loaded upfront.",
    },
    {
      Q: "What is HTML? Difference between HTML and HTML5? Advantages of HTML5?*",
      A: "HTML is a markup language for web pages. HTML5 is its latest version with enhanced features like new elements and improved multimedia support.",
    },
    {
      Q: "What is the difference between HTML and XHTML?",
      A: "HTML is a markup language for web pages with a forgiving syntax. XHTML is stricter and requires well-formed XML syntax.",
    },
    {
      Q: "What is the role of DOCTYPE in HTML?*",
      A: "DOCTYPE (Document Type Declaration) specifies the version and type of HTML used in a document, ensuring proper rendering and standard compliance by browsers.",
    },
    {
      Q: "What if you remove <!DOCTYPE html> from our HTML?",
      A: "Removing `<!DOCTYPE html>` from HTML can lead to rendering issues and inconsistencies across different browsers, as it defines the document type and helps browsers interpret the HTML correctly.",
    },
    {
      Q: "Difference between head and body in HTML? Where to place JS link reference?*",
      A: "Head: Contains meta information about the HTML document, such as title, meta tags, link tags for stylesheets, and script tags for JavaScript files. \n Body: Contains the main content of the HTML document, such as text, images, links, and other elements visible on the webpage. \n JS Link Reference: Place JavaScript link references in the `<head>` section, typically using `<script>` tags, to ensure scripts are loaded before the content in the `<body>` is rendered.",
    },
    {
      Q: "What is Title tag in HTML? What are the 4 advantagesof TITLE TAG?*",
      A: "Title Tag: Specifies the title of the HTML document displayed in the browser's title bar or tab. \n Advantages: \n 1. Browser Tab Identification: Helps users identify open tabs or windows. \n2. Search Engine Optimization (SEO): Provides a concise, relevant title for search engine results.\n3. Accessibility: Assists screen readers and other assistive technologies in understanding the page's content.\n4. Bookmarking: Sets the default title when users bookmark the page.",
    },
    {
      Q: "What are Meta Tags? What are thr 5 types of Meta tags?",
      A: 'Meta Tags: Provide metadata about the HTML document, such as character set, description, keywords, authorship, and viewport settings.\nTypes of Meta Tags:\n1. Charset: Specifies the character encoding for the document (`<meta charset="UTF- 8">`).\n2. Viewport: Controls the layout and scaling on mobile devices (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`).\n3. Description: Provides a brief summary of the page content (`<meta name="description" content="Page description">`).\n4. Keywords: Lists keywords relevant to the page content (`<meta name="keywords" content="keyword1, keyword2, keyword3">`).\n5. Author: Specifies the author of the document (`<meta name="author" content="Author Name">`).',
    },
    {
      Q: "What are HTML Elements? What is the difference between Element & Tag?*",
      A: "HTML Elements: Building blocks of HTML documents that define the structure and content.\nElement: Represents everything from the start tag to the end tag.\nTag: Denotes the start and end of an element, enclosed in angle brackets.",
    },
    {
      Q: "What are the roles and uses of the ‹div> element in HTML?*",
      A: "Role of <div> Element: Used as a generic container to group and style content divisions in HTML.",
    },
    {
      Q: "What is the difference between ‹div> and ‹ span> element?",
      A: "Difference between <div> and <span> Element:\n<div>: Block-level element for grouping larger sections of content.\n<span>: Inline element for grouping smaller portions of text or inline elements.",
    },
    {
      Q: "What is the role of <p>, <a>, <br», <hr», <em>, <img›, ‹input> & <button>?",
      A: "Roles of Common HTML Elements:\n<p>: Defines a paragraph.\n<a>: Creates a hyperlink.\n<br>: Inserts a line break.\n<hr>: Creates a thematic break or horizontal rule.\n<em>: Emphasizes text.\n<img>: Embeds an image.\n<input>: Creates an input control.\n<button>: Defines a clickable button.",
    },
    {
      Q: "What is the role of header, main, section, footer & address elements in HTML?",
      A: "Roles of Semantic HTML Elements:\n<header>: Represents introductory content or a group of introductory content.\n<main>: Contains the main content of the document.\n<section>: Represents a thematic grouping of content, typically with a heading.\n<footer>: Represents the footer of a document or section.\n<address>: Defines contact information for the author or owner of a document or article.",
    },
    {
      Q: "What is the role of Heading tags in HTML? How does it impact SEO?",
      A: "Heading Tags in HTML:\nUsed to define headings (<h1> to <h6>), indicating the importance of content.\nImpact SEO by providing structure and hierarchy to content, helping search engines understand the page's main topics.",
    },
    {
      Q: "What is the difference between ‹section> & ‹article> elements?",
      A: "Difference between <section> and <article> Elements:\n<section>: Groups related content thematically.\n<article>: Represents a self-contained piece of content that can be independently distributed or reused.",
    },
    {
      Q: "What are Root, Parent, Child & Nested elements?*",
      A: "Root Element: The <html> element, which encapsulates the entire HTML document.\nParent Element: An element that contains other elements inside it.\nChild Element: An element nested within another element.\nNested Elements: Elements contained within other elements.",
    },
    {
      Q: "What are Empty Elements?",
      A: "Elements that do not have any content between opening and closing tags, typically self-closing in HTML, like <br>, <img>, and <input>.",
    },
    {
      Q: "What are Semantic Elements in HTML?*",
      A: "HTML elements that carry meaning, defining the structure and content of a web page in a more meaningful and machine-readable way, such as <header>, <footer>, <article>, <section>, and <nav>.",
    },
    {
      Q: "Can HTML tags be written in Uppercase?",
      A: "HTML tags are case-insensitive, so they can be written in uppercase, lowercase, or a mix of both. However, lowercase is conventional and recommended for consistency.",
    },
    {
      Q: "What are the 3 differences between Block-Level & Inline Elements?*",
      A: "Display: Block-level elements occupy the full width available, while inline elements take only as much width as necessary.\nLine Breaks: Block-level elements start on a new line, whereas inline elements do not force line breaks.\nContainer: Block-level elements can contain other block and inline elements, while inline elements can only contain other inline elements.",
    },
    {
      Q: "List all Block-Level & Inline Elements in HTML.",
      A: "Block-Level Elements: <div>, <p>, <h1> to <h6>, <header>, <footer>, <section>, <article>, <nav>, <ul>, <ol>, <li>, <table>, <form>.\nInline Elements: <span>, <a>, <strong>, <em>, <img>, <input>, <button>, <label>, <select>, <textarea>, <br>, <hr>.",
    },
    {
      Q: "What are HTML Attributes? What are the Types of HTML attributes?*",
      A: "HTML Attributes: Provide additional information about HTML elements, modifying their behavior or appearance.\nTypes: Attributes can be standard (like id, class, src) or custom (such as data-* attributes for storing custom data).",
    },
    {
      Q: "What are the Id, Style & Class attributes of an element? When to use what?*",
      A: "Id Attribute: Unique identifier for an element, used to reference it uniquely in CSS or JavaScript.\nStyle Attribute: Inline CSS styling applied directly to an element.\nClass Attribute: Assigns one or more class names to an element, enabling multiple elements to share a common style.\nWhen to Use:\nId: Use for unique identification and targeting specific elements.\nStyle: Use sparingly for small, specific style adjustments.\nClass: Use for styling multiple elements consistently or applying common behavior.",
    },
    {
      Q: "What will happen if two elements have same ids?",
      A: "Having duplicate id attributes in HTML is invalid and can lead to unexpected behavior in JavaScript and CSS. Only the first element with a specific id will be recognized.",
    },
    {
      Q: "How to specify Multiple Classes for single element? What is the style precedence?",
      A: `Specify multiple classes by separating them with spaces in the class attribute (e.g., <div class="class1 class2">). \nStyle Precedence: CSS rules applied later in the stylesheet override earlier rules, with !important rules having the highest precedence.`,
    },
    {
      Q: `What are Data Attributes in HTML?*`,
      A: `Data Attributes: Prefixed with data-, these custom attributes allow you to store extra information on HTML elements for JavaScript or CSS use without affecting the rendering or semantics.`,
    },
    {
      Q: `What are the 5 Types of Links in HTML?*`,
      A: `Anchor (<a>): Links to another webpage or resource.
Bookmark (<a> with #): Jumps to a specific location within the same webpage.
Email (<a> with mailto:): Opens the default email client to send an email.
External (<a> with https:// or http://): Links to an external webpage.
Internal (<a> with relative path): Links to another page within the same website.
`,
    },
    {
      Q: `What is the difference between Absolute & Relative URLs?*`,
      A: `Absolute URL: Specifies the full path from the root domain (e.g., https://example.com/page.html).
Relative URL: Specifies the path relative to the current document (e.g., page.html).`,
    },
    {
      Q: `What is the purpose of the <nav> element in HTML?`,
      A: `Defines a section of navigation links for navigating the document or related documents.`,
    },
    {
      Q: `What is a Fragment Identifier in a URL?*`,
      A: `A fragment identifier (#) in a URL specifies a specific section or location within the same document to navigate to (e.g., https://example.com/page.html#section1).`,
    },
    {
      Q: `What is the purpose of the <base> element in HTML.?`,
      A: `Specifies a base URL for relative URLs in the document, helping browsers resolve relative paths accurately.`,
    },
    {
      Q: `How do you add an external stylesheet in your HTML?`,
      A: `Use the <link> element with rel="stylesheet" and href attribute pointing to the external CSS file (e.g., <link rel="stylesheet" href="styles.css">).
`,
    },
    {
      Q: `How do you open a link in a new tab?`,
      A: `Add target="_blank" attribute to the <a> element (e.g., <a href="https://example.com" target="_blank">Link</a>).`,
    },
    {
      Q: `How do you create an Email Link?`,
      A: `Use <a> element with href="mailto:email@example.com" attribute (e.g., <a href="mailto:email@example.com">Email Us</a>).`,
    },
    {
      Q: `What are the different Types of Lists in HTML?*`,
      A: `Ordered <ol>: Numbered list.
Unordered <ul>: Bulleted list.
Definition <dl>: Terms and definitions list.`,
    },
    {
      Q: `What is a Nested List in HTML?`,
      A: `A list (<ul>, <ol>, <dl>) that is placed within another list item (<li>), creating a hierarchical structure.`,
    },
    {
      Q: `What are table, tr, th, td elements? What are table advantages & disadvantages?*`,
      A: `<table>: Container for the table.
<tr>: Table row.
<th>: Table header cell.
<td>: Table data cell.
Advantages: Organizes data into rows and columns, enhancing readability and structure.
Disadvantages: Overuse may impact accessibility and responsiveness.`,
    },
    {
      Q: `What is the colspan attribute in HTML?`,
      A: `Specifies the number of columns a cell (<td> or <th>) should span across in a table row.`,
    },
    {
      Q: `What is the best way to add a border to a table, column and cell?`,
      A: `Table: Use CSS (border: 1px solid #000;) or HTML attribute (border="1") on the <table> element.
Column: Apply CSS (border-left, border-right) to <th> or <td> elements in each row.
Cell: Use CSS (border property) directly on <td> or <th> elements.`,
    },
    // {
    //   Q: ``,
    //   A: ``,
    // },
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
