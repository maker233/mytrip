const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: "Popino, the Dogtor" },
  username: String,
  password: String,
  bio: { type: String, default: "Ayer se fue tomo sus cosas y se puso a navegar una camisa un pantalon vaquero y una cancion donde ira." },
  photo: { type: String, default: "https://bootdey.com/img/Content/avatar/avatar2.png" },
  stepstoday: { type: Number, default: 0 }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
