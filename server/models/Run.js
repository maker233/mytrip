const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const runSchema = new Schema({
  name: String,
  distance: { type: Number, default: 0 },
  password: String,
  maxusers: { type: Number, default: 0 },
  photo: { type: String, default: "/images/popino.jpg" },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Run = mongoose.model('Run', runSchema);
module.exports = Run;