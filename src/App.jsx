import { useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import RecipeRequestCard from "./components/recipeRequestCard";

function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto p-5 sm:max-w-3xl space-y-5">
        <Form setList={setList} />
        {list.length > 0 && (
          <>
            <RecipeRequestCard list={list} />
            <CardList list={list} />
          </>
        )}
      </main>
    </>
  );
}

export default App;
