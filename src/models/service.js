const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const service = model("service", ServiceSchema);

module.exports = service;
