import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config"

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import journalRouter from "./routes/journalRoute.js";
import chatbotRouter from "./routes/chatbotRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mental-health-chatbot-and-journal.netlify.app"
  ], 
  credentials: true                
}));
await connectDB();


app.use('/api/user', userRouter);
app.use("/api/journal", journalRouter);
app.use('/api/chatbot', chatbotRouter);
app.get('/', (req, res) => res.send("API working "));

app.listen(PORT, () => {
  console.log(`Server running on port: ` + PORT);
});
