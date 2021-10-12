import { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";
import EditWindow from "./EditWindow";
import NewBook from "./NewBook";
function Books() {
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(0);
  const [postuKeitimoLaikas, setPostuKeitimoLaikas] = useState(Date.now());

  useEffect(() => {
    axios
      .get("http://localhost:4000/books")
      .then((res) => {
        setBooks(res.data);
        // setPostuKeitimoLaikas(Date.now());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [postuKeitimoLaikas]);

  const bookDelete = (id) => {
    axios.delete("http://localhost:4000/books/" + id).then((res) => {
      setPostuKeitimoLaikas(Date.now());
    });
  };

  const update = (time) => {
    setPostuKeitimoLaikas(time);
  };

  const getData = (data) => {
    console.log(data);
    setEdit(data);
  };

  return (
  <>
    <NewBook update={update} ></NewBook>
    <div className="book-container">
      <EditWindow update={update} oneBook={edit}></EditWindow>
      {books.map((item) => (
          <Book
          
          data={item}
          key={item.id}
          index={books.indexOf(item)}
          bookDelete={() => bookDelete(item.id)}
          getData={getData}
          ></Book>
          ))}
    </div>
    </>
  );
}

export default Books;
