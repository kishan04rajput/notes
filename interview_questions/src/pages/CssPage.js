import React from "react";

export const CssPage = () => {
  const QA = [
    {
      Q: `What is CSS? What are the 5 ways to implement CSS in HTML?`,
      A: `CSS (Cascading Style Sheets) is used to style and layout web pages. The five ways to implement CSS are: inline styles, internal stylesheet, external stylesheet, @import rule, and CSS frameworks/libraries.`,
    },
    {
      Q: `What is Inline Style in CSS? When to use it in real applications?`,
      A: `Inline style is CSS code applied directly to an HTML element using the style attribute. Use it for quick, small, and unique style adjustments on specific elements.`,
    },
    {
      Q: `What is Internal Stylesheet in CSS? When to use it in real applications?`,
      A: `An internal stylesheet is CSS code within a <style> tag in the HTML document's <head>. Use it for styling a single document, especially if the styles are document-specific.`,
    },
    {
      Q: `What is External Stylesheet in CSS? When to use it in real applications?`,
      A: `An external stylesheet is a separate CSS file linked to an HTML document using the <link> tag. Use it for consistent styling across multiple web pages.`,
    },
    {
      Q: `What are the 5 advantages of external stylesheet?`,
      A: `Advantages: Consistent styling across pages, improved code maintainability, easier to update, faster page load times (due to caching), and separation of content from presentation.`,
    },
    {
      Q: `How do you include CSS in a webpage or HTML?`,
      A: `Include CSS using the <style> tag for internal styles, the style attribute for inline styles, or the <link> tag for external stylesheets.`,
    },
    {
      Q: `How to implement CSS using @import rule?`,
      A: `Use the @import rule in a CSS file or <style> tag to import additional CSS files (e.g., @import url('styles.css');).`,
    },
    {
      Q: `What is CSS Preprocessors? What is SCSS?`,
      A: `CSS preprocessors are scripting languages that extend CSS with variables, nested rules, and functions. SCSS (Sassy CSS) is a popular preprocessor syntax for Sass, enhancing CSS with these features.`,
    },
    {
      Q: `What are the 3 Types of CSS Preprocessors?`,
      A: `The three main types of CSS preprocessors are Sass/SCSS, Less, and Stylus.`,
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
    <div>
      {QA.map((item, index) => (
        <div key={index}>
          <QACard question={item.Q} answer={item.A} />
        </div>
      ))}
    </div>
  );
};
