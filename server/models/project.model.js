const mongoose = require("mongoose");
const { ItemSchema } = require("./item.model");
const { NotesSchema } = require("./notes.model");

const ProjectSchema = mongoose.Schema({
  projectName: {
    type: String,
    // required: true
  },
  imageId: {
    type: mongoose.Types.ObjectId,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  roomId: {
    type: mongoose.Types.ObjectId,
    ref: "Room",
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  notesId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Note",
    },
  ],

  itemsId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const ProjectModel = mongoose.model("Project", ProjectSchema);
module.exports = ProjectModel;
