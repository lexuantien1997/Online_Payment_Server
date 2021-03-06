const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:  {
    type: String,
    require: true  
  },
  email :  {
    type: String
  },
  countryCode: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  requestId: {
    type: String
  },
  password:  {
    type: String,
    require: true
  },
  money:  {
    type: Number,
    default: 0
  },
  gender: {
    type: Boolean,
    default: true,
    require: false
  },
  address: {
    type: String,
    default: "Viet Nam",
    require: false
  },
  birthday: {
    type: String,
    require: false,
    default: "25/10/1997"
  },
  memberAt: {
    type: String,
    require: false,
    default: "01/01/2018"
  },
  isFirstTime: {
    type: Boolean,
    require: false,
    default: true
  },
  status:  {
    type: Number,
    default: 1
  },
  securityPass: {
    type: String,
    default: "",
    require: false
  },
  isFirstTime: {
    type: Boolean,
    default: true,
    require: false
  },
  avatar:{
    type: String,
    default: "",
    require: false
  }
},{collection: 'user'});

const User =  mongoose.model('user',UserSchema);
module.exports = User;