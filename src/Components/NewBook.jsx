import axios from "axios";
import { useEffect, useState } from "react";


function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [pages, setPages] = useState("");

  const inputController = (e, value) => {
    switch (value) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "pages":
        setPages(e.target.value === "" ? 0: e.target.value);
        console.log(pages);
        break;
    }
  };

  const collectInput = () => {
    let data = {
      title: title,
      author: author,
      category: category,
      pages: pages,
    };
    postBook(data);
  };

  const postBook = (data) => {
    axios
      .post("http://localhost:4000/books/", { data })
      .then(function (response) {
        // setPostuKeitimoLaikas(Date.now());
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="new-book">
      <span>Title</span>
      <input type="text" value={title} onChange={(e) => inputController(e, "title")} />
      <span>Author</span>
      <input type="text" value={author} onChange={(e) => inputController(e, "author")} />
      <span>Category</span>
      <input type="text" value={category} onChange={(e) => inputController(e, "category")} />
      <span>pages</span>
      <input type="number" value={pages} onChange={(e) => inputController(e, "pages")} />
      <button onClick={collectInput}>Done!</button>
    </div>
  )
}

export default NewBook;
