const mongoose = require("mongoose");

var pattern = {
  thumbnail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  eligiblity: {
    type: String,
    required: true,
  },
};

const YojnaSchema = mongoose.Schema(pattern);

module.exports = mongoose.model("Yojna", YojnaSchema);
