const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: { type: String, default: '' },
  phone: { type: String, default: '' },
  company: { type: String, default: '' }
});

UserSchema.statics = {
  list() {
    // return this.find().sort({ fullName: -1 }).exec();
    return this.find().select(['fullName','phone']).exec();
  },
  get(id) {
    return this.findById(id).exec()
  },
  update(id, newData) {
    return this.updateOne({ _id: id }, {...newData})
  },
  delete(id) {
    return this.deleteOne({ _id: id })
  }
};

module.exports = mongoose.model('User', UserSchema);
