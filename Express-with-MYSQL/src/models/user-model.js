import mongoose from mongoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;