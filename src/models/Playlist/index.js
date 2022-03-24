const mongoose = require('mongoose')

const PlaylistSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    playlist: { type: Array },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Playlist', PlaylistSchema)
