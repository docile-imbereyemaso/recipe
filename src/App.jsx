import { useState } from "react";
import CardList from "./components/CardList";
import AddIngredient from "./components/IngredientForm";
import Navbar from "./components/Navbar";
import RecipeBuilder from "./components/RecipeBuilder";
import RecipeContainer from "./components/RecipeContainer";
import { getRecipeFromMistral } from "./ai";
function App() {
  const [list, setList] = useState([]);
  const[isShown,setIsShown] = useState(false);
  async function getRecipeMarkdown(){
    try {
      const recipeMarkdown  = await getRecipeFromMistral(list);
      console.log(recipeMarkdown);
    } catch (error) {
      console.log(error);
    }
  }
  const handleIsShown =()=>setIsShown(prevShown=>!prevShown)
  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto p-5 sm:max-w-3xl space-y-5">
        <AddIngredient setList={setList} />
        {list.length ? (
          <CardList
            list={list}
            title="Ingredients on hand"
            headingFontSize="text-3xl"
            listType="list-disc"
          />
        ) : null}

        {list.length > 3 && <RecipeBuilder handleIsShown={handleIsShown} getRecipeMarkdown={getRecipeMarkdown}/>}
        {isShown && <RecipeContainer/>}
      </main>
    </>
  );
}

export default App;
