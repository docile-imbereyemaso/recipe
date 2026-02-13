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
            <CardList list={list} title="Ingredients on hand" headingFontSize="text-3xl" listType="list-disc"/>
            <RecipeRequestCard list={list} />
            
          </>
        )}
      </main>
    </>
  );
}

export default App;
