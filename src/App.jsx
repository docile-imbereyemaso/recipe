import { useEffect, useRef, useState } from "react";
import CardList from "./components/CardList";
import AddIngredient from "./components/IngredientForm";
import Navbar from "./components/Navbar";
import RecipeBuilder from "./components/RecipeBuilder";
import RecipeContainer from "./components/RecipeContainer";
import { getRecipeFromMistral } from "./api/ai";
function App() {
  const [list, setList] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const recipeSection = useRef(null);
  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);
  async function getRecipeMarkdown() {
    try {
      setRecipe("");
      setLoading(true);
      const recipeMarkdown = await getRecipeFromMistral(list);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Failed to fetch ", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto p-5 sm:max-w-3xl space-y-5">
        <AddIngredient setList={setList} setRecipe={setRecipe} />
        {list.length ? (
          <CardList
            list={list}
            title="Ingredients on hand"
            headingFontSize="text-3xl"
            listType="list-disc"
          />
        ) : null}

        {list.length > 3 && (
          <RecipeBuilder
            getRecipeMarkdown={getRecipeMarkdown}
            ref={recipeSection}
          />
        )}
        {loading && (
          <div class="flex items-center justify-center">
            <div class="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
          </div>
        )}
        {recipe && <RecipeContainer recipe={recipe} />}
      </main>
    </>
  );
}

export default App;
