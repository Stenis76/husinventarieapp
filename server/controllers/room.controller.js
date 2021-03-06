const Room = require("../models/room.model");

// GET ALL
getAllRooms = async (req, res) => {
  await Room.find({userParentId: {$in: req.session.userId}})
    .populate("items")
    .populate("projects")

    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
};

// GET ONE
getOneRoom = async (req, res) => {
  await Room.findById(req.params.roomId).populate("houseId").populate("projects")

    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
};

// CREATE
createNewRoom = (req, res) => {
  const newRoom = {
    houseId: req.body.houseId,
    userParentId: req.session.userId,
    roomName: req.body.roomName,
    roomSize: req.body.roomSize,
    roomHeight: req.body.roomHeight,
    items: req.body.items,
    projects: req.body.projects,
  }
  const room = new Room(newRoom);

  room.save((err, room) => {
    if (err) {
      console.log("error", err);
      res.status(400).json(err);
    } else res.status(201).json(room);
  });
};

// DELETE
deleteRoom = async (req, res) => {
  try {
    const removeRoom = await Room.deleteOne({
      _id: req.params.roomId,
    });
    res.status(200).json({ status: "removed room" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
updateRoom = async (req, res) => {
  try {
    await Room.updateOne(
      { _id: req.params.roomId },
      {
        $set: {
          houseId: req.body.houseId,
          userParentId: req.session.userId,
          roomName: req.body.roomName,
          roomSize: req.body.roomSize,
          roomHeight: req.body.roomHeight,
          projects: req.body.projects,
          items: req.body.items
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createNewRoom,
  deleteRoom,
  updateRoom,
};
