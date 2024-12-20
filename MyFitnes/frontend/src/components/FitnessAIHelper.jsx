import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI("AIzaSyBocrfpi0ezYv51OfVwnBvGtrWxlzA_y6Y");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const FitnessAI = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const mdParser = new md();

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      alert("Please enter a fitness query or goal!");
      return;
    }

    setLoading(true);
    try {
      const aiResponse = await model.generateText({
        prompt: `Provide detailed fitness tips based on the following query: ${userInput}`,
        maxOutputTokens: 256,
      });

      setResponse(mdParser.render(aiResponse.text));
    } catch (error) {
      console.error("Error generating text:", error);
      alert("Failed to generate fitness tips. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Fitness Pal AI</h1>
      <p>Ask for personalized fitness tips powered by Gemini AI.</p>

      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter your fitness goal or query (e.g., 'How to build muscle?')"
        rows="4"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      ></textarea>

      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Generating..." : "Get Fitness Tips"}
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h2>AI Response:</h2>
        {response ? (
          <div
            dangerouslySetInnerHTML={{ __html: response }}
            style={{ fontSize: "16px" }}
          ></div>
        ) : (
          <p>No response yet. Ask a question above to get started!</p>
        )}
      </div>
    </div>
  );
};

export default FitnessAI;
