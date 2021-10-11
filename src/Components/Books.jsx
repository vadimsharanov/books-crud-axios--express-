import { useEffect, useState } from "react"
import Book from "./Book";
import axios from "axios"
function Books() {
    
    const [books, setBooks] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4000/books")
        .then((res)=> {
            setBooks(res.data)
        })
    }, [])



    return (

        <div className="row">
        {books.map((item)=>  <Book data={item} key={item.id} ></Book> )}
        </div>
    )
}

export default Books