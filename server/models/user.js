import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  first_name: String,
  last_name: String,
  usd: {type: Number, default: 10000},
  bitcoin: {type: Number, default: 0},
  monero: {type: Number, default: 0},
  dogecoin: {type: Number, default: 0},
  litecoin: {type: Number, default: 0},
});

export default mongoose.model('User', Schema);
