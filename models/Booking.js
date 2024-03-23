const mangoose = require ('mongoose')
const bookingSchema = new mongoose.shema({
    user: {type: mongoose.Schema.Type.ObjetId , ref: 'User', required : true},
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'MeetingRoom', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    // Autres champs selon les besoins (par exemple, statut de la réservation, notes, etc.)
  });
  
  const Booking = mongoose.model('Booking', bookingSchema);
  
  module.exports = Booking;