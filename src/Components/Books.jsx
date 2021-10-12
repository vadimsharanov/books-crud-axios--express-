import { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";
import EditWindow from "./EditWindow";
function Books() {
  const [books, setBooks] = useState([]);
  const [edit, setEdit] = useState(0);
  const [postuKeitimoLaikas, setPostuKeitimoLaikas] = useState(Date.now());

  useEffect(() => {
    axios.get("http://localhost:4000/books").then((res) => {
      setBooks(res.data);
    });
  }, [postuKeitimoLaikas]);

  const bookDelete = (id) => {
    axios.delete("http://localhost:4000/books/" + id).then((res) => {
      setPostuKeitimoLaikas(Date.now());
    });
  };
  const editBook = (id) => {
    console.log(id);
    // axios
    //   .put("http://localhost:4000/books/" + id, { data })
    //   .then(function (response) {
    //     // setPostuKeitimoLaikas(Date.now());
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const getData = (data) => {
      console.log(data);
    setEdit(data)
  }
 

  return (
      <div className="book-container">
        <EditWindow oneBook={edit} ></EditWindow>      
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
  );
}

export default Books;
