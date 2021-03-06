const mongoose = require("mongoose");
const { RoomSchema } = require("./room.model");
const { ProjectSchema } = require("./project.model");
const HouseSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  userParentId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  houseCategory: {
    type: String,
  },
  houseSize: {
    type: String,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  rooms: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Room",
    },
  ],
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  ],
});

const HouseModel = mongoose.model("House", HouseSchema);
module.exports = HouseModel;
