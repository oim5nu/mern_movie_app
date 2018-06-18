const mongoose = require('mongoose');
const { Schema } = mongoose;
const { promisify } = require('../helpers/common');
const { genSalt, hash, compare } = require('bcryptjs');
const SALT_WORK_FACTOR = 10; // bcrypt salt's strength

const genSaltAsync = promisify(genSalt);
const hashAsync = promisify(hash); 
const compareAsync = promisify(compare);

/* struture */
let userSchema = new Schema({
  name: {
    unique: true,
    type: String
  },
  email: {
    unique: true,
    type: String
  },
  password: String,
/* 
  10: normal user
  20: verified user
  30: super user
  >100: admin
  >200: super admin
 */
  role: {
    type: Number,
    default: 10
  },
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

/*
  Hooks,Plugins,Instances, Statics etc
*/
userSchema.pre('save', function(next) {
  //let user = this;

  if (this.isNew) {
    this.meta.createdAt = Date.now();
    this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }

  // generate a random salt and then hash it
  genSaltAsync(SALT_WORK_FACTOR)
    .then(salt=>{
      return hashAsync(user.password, salt)
              .catch(err => {
                throw "bcryptjs.hash failed";
              });
    }).then(hash => {
      //user.password = hash;
      this.password = hash;
      next(); 
    })
    .catch(err => next(err, null));
});

/* statics */

userSchema.statics = {
  findAll: function(cb) {
    return this.find({}).sort('meta.createAt').exec(cb);
  },
  findById: function(id, cb) {
    return this.findOne({ _id: id }).exec(cb);
  }
}

/*
  methods
*/
userSchema.methods = {
  comparePassword: function(password, cb) {
    compareAsync(password, this.password)
      .then(isMatch => {
        return cb(null, isMatch);
      })
      .catch(err => {
        return cb(err);
      })
    //bcryptjs.compare(password, this.password, function(err, isMatch))
  }
}

let userModel = mongoose.model('user', userSchema);

module.exports = userModel;
