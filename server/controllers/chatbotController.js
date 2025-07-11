import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const history = [];

export const handleChat = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  try {

    history.push({
      role: "user",
      parts: [{ text: message }],
    });

    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: history,
      config: {
        systemInstruction: `You are a kind, empathetic mental health assistant. 
You respond calmly, positively, and supportively to users who may be feeling sad, anxious, or emotionally low.
Avoid giving medical advice, but promote self-care, well-being, and emotional resilience.`,
        temperature: 0.7,
      },
    });

    const reply = result.text;

    history.push({
      role: "model",
      parts: [{ text: reply }],
    });

    res.status(200).json({ success: true, reply });
  } catch (err) {
    console.error("Gemini Chat Error:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to get response from Gemini.",
    });
  }
};
