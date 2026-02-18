import ReactMarkdown from "react-markdown";
import React from "react";
const RecipeContainer = ({ recipe }) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2 className=" text-xl sm:text-3xl my-4 font-semibold">
        Chef Claude Recommends:{" "}
      </h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
};

export default RecipeContainer;
