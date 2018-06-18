const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const categorySchema = new Schema({
  name: String,
  movies: [{type: ObjectId, ref: 'Movie'}],
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

mongoose.model('categories', categorySchema);