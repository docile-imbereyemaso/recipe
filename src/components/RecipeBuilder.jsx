import React from "react";

const RecipeBuilder = () => {
  return (
    <div className="flex justify-between items-center bg-zinc-200 p-5 rounded-md">
      <div className="space-y-3">
        <h1 className="text-xl font-semibold">Ready for a recipe?</h1>
        <p className="text-gray-600 tracking-tight f">
          Generate a recipe from your list of ingredients
        </p>
      </div>
      <button className="bg-terra px-4 py-3 rounded-lg text-white hover:text-zinc-100/50 transition-all focus:ring-terra focus:ring-2 focus:ring-offset-2">
        Get a recipe
      </button>
    </div>
  );
};

export default RecipeBuilder;
