import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});


const journalModel = mongoose.models.journal || mongoose.model("journal", journalSchema);

export default journalModel;