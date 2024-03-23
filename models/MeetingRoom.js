const mongoose = require('mongoose');

const meetingRoomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  capacity: { type: Number, required: true },
  amenities: { type: [String], default: [] },
  // Autres champs selon les besoins (par exemple, disponibilité, équipements, etc.)
});

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema);

module.exports = MeetingRoom;
