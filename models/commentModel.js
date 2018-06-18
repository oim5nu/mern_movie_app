const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const commentSchema = new Schema({
  movie: {type: ObjectId, ref: 'Movie'},
  from: {type: Object, ref: 'User'},
  reply: [{
    from: {type: ObjectId, ref: 'User'},
    to: {type: ObjectId, ref: 'User'},
    content: String
  }],
  content: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

mongoose.model('comments', commentSchema);