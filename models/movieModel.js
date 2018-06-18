const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const movieSchema = new Schema({
  director: String,
  title: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  pv: {
    type: Number,
    default: 0
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    udpateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

mongoose.model(('movies', movieSchema));