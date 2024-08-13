import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  const title = "The Good Daughter";
  const author = "Karin Slaughter";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/412nNS-i0qL._SY445_SX342_.jpg"
        alt="The Good Daughter"
      />
      <h2>{title}</h2>;<h4>{author} </h4>;
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
