import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement -> JS obj -> HTML Element
const heading = React.createElement("div", { id: "heading" }, "Namaste React");

console.log(heading);

// JSX (transpiled before it reaches JS Enginer) => Done by Parcel -> Babel
// JSX => Babel transpiles it to React.createElement -> JS obj -> HTML Element
const jsxHeading = <h1>Namaste React from JSX!</h1>;

console.log(jsxHeading);

const Title = () => <h1>Namaste React Title!</h1>;

const titleElem = <h2>Title Element</h2>;

// Component Composition -> Combining multiple components
const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    {/* JSX sanitizes the data before executing JS in the browser to take care of cross site scripting (XSS)attacks */}
    {titleElem}
    <h1>Namaste React from Functional Component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
