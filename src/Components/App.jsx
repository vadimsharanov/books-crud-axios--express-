import Books from "./Books";
import EditWindow from "./EditWindow";
import Header from "./Header";
import NewBook from "./NewBook";



function App() {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <Books></Books>
      </div>
    </>
  );
}

export default App;
