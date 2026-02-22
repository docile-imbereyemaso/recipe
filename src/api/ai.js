import { InferenceClient } from "@huggingface/inference";

// 1. Ensure this is defined!
const SYSTEM_PROMPT = "You are a professional chef. Provide a recipe name, ingredients, and instructions.";

// 2. Initialize (Make sure you restarted your server after editing .env)
const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 500,
        });

        if (!response.choices || response.choices.length === 0) {
            throw new Error("No response returned from the model.");
        }

        return response.choices[0].message.content;
    } catch (err) {
        // Detailed logging for debugging
        console.error("Hugging Face API Error:", err.message);
        return "Sorry, I couldn't generate a recipe right now. Please try again.";
    }
}