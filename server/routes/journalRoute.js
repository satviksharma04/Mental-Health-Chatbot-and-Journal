import express from 'express';
import { addJournal, editJournal, getAllJournals, deleteJournal } from '../controllers/journalController.js';
import userAuth from '../middlewares/userAuth.js';

const journalRouter = express.Router();


journalRouter.post("/add", userAuth, addJournal)
journalRouter.post("/edit/:journalId", userAuth, editJournal)
journalRouter.get("/all", userAuth, getAllJournals)
journalRouter.delete("/delete/:journalId", userAuth, deleteJournal)

export default journalRouter;