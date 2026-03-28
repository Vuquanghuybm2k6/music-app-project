import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: String, 
  avatar: String,
  slug: String,
  topicId: String,
  singerId: String,
  like: {
    type: Number,
    default: 0
  },
  listen: {
    type: Number,
    default: 0
  },
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