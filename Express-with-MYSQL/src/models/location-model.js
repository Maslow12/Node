import mongoose from mongoose
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    state: { type: String, required: true},
    city: { type: String, required: true },
    department: { type: String, required: true },
    parish: { type: String, required: true}
}, {
  timestamps: true,
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;