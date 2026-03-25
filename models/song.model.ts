import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: String, 
  avatar: String,
  slug: String,
  topicId: String,
  singerId: String,
  like: Number,
  audio: String,
  description: String,
  lyrics: String,
  deleted: {
    type: Boolean,
    default: false
  },
  deletedAt: Date,
},{
  timestamps: true
})
const Song = mongoose.model('Song', songSchema, 'songs');
export default Song