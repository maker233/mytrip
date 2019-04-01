const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: "Popino, the Dogtor" },
  username: String,
  password: String,
  bio: { type: String, default: "Ayer se fue tomo sus cosas y se puso a navegar una camisa un pantalon vaquero y una cancion donde ira, donde ira y decidio batirse en duelo con el mar y recorer el mundo en su velero y navegar laylala navegar." },
  photo: { type: String, default: "/images/popino.jpg" },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
