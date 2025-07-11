import journalModel from "../models/journalModel.js";

export const addJournal = async (req, res, next) => {
  const { title, content } = req.body;
  const id = req.userId;

  if (!title) {
    return res.json({ success: false, message: "Title is required" });
  }
  if (!content) {
    return res.json({ success: false, message: "Content is required" });
  }

  try {
    const journal = new journalModel({
      title,
      content,
      userId: id,
    });
    await journal.save();

    res.status(201).json({
      success: true,
      message: "Journal added successfully",
      journal,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const editJournal = async (req, res, next) => {
  const journal = await journalModel.findById(req.params.journalId);

  if (!journal) {
    return res.json({ success: false, message: "journal not found" });
  }
  if (req.userId !== journal.userId) {
    return res.json({
      success: false,
      message: "You can only update your own journal",
    });
  }

  const { title, content } = req.body;

  if (!title && !content) {
    return res.json({ success: false, message: "No changes provided" });
  }

  try {
    if (title) {
      journal.title = title;
    }

    if (content) {
      journal.content = content;
    }

    await journal.save();

    res.status(200).json({
      success: true,
      message: "Journal updated successfully",
      journal,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const getAllJournals = async (req, res, next) => {
  const userId = req.userId;

  try {
    const journals = await journalModel.find({ userId: userId });

    res.status(200).json({
      success: true,
      message: "All journals retrived successfully",
      journals,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const deleteJournal = async (req, res, next) => {
  const journalId = req.params.journalId;

  const journal = await journalModel.findOne({
    _id: journalId,
    userId: req.userId,
  });

  if (!journal) {
    return res.json({ success: false, message: "journal not found" });
  }

  try {
    await journalModel.deleteOne({ _id: journalId, userId: req.userId });

    res.status(200).json({
      success: true,
      message: "Journal deleted successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
