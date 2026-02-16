import { useState } from "react";
import CardList from "./components/CardList";
import AddIngredient from "./components/IngredientForm";
import Navbar from "./components/Navbar";
import RecipeBuilder from "./components/RecipeBuilder";

function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto p-5 sm:max-w-3xl space-y-5">
        <AddIngredient setList={setList} />
        {list.length > 3 && (
          <>
            <CardList
              list={list}
              title="Ingredients on hand"
              headingFontSize="text-3xl"
              listType="list-disc"
            />
            <RecipeBuilder />
          </>
        )}
      </main>
    </>
  );
}

export default App;
