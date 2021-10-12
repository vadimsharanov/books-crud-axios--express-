function Book({ data,index, bookDelete, getData }) {
  return (
    <div className="book-post">
        <div>{index}</div>
        <div>{data.title}</div>
        <div>{data.author}</div>
        <div>{data.category}</div>
        <div>{data.pages}</div>
        <button onClick={bookDelete} >delete</button>
        <button onClick={()=> getData(data)} >Edit</button>
        <div></div>
    </div>
  );
}

export default Book;
