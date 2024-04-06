const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  username: { type: String, required: true ,unique: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imageUrl: { type: String, required: true ,default:"https://fastly.picsum.photos/id/90/200/300.jpg?hmac=yKaRyhG3EFez3DuYnuPdh29pSCXLc8DDXROYdKQQp30"}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
