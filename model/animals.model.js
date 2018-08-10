const mongoose = require ('mongoose');

const animalSchema = new mongoose.Schema (
  {

    name: {
      type: String,
      required: 'Name is required',
    },

    race: {
      type: String,
      required: 'Race is required',
    },

    sex: {
      type: String,
      enum: ['MALE', 'FEMALE'],
      required: 'Sex is required',
    },

    color: {
      type: String,
      required: 'Color is required',
    },

    age: {
      type: Number,
      required: 'Age is required',
      min: [1, 'Dog age can not be negative'],
      max: [20, 'Sorry, but your dog is too old']
    },

    pedigree: {
      type: String,
      enum: ["YES", "NO"],
      required: 'Pedigree is required',
    },

    achievements: {
      type: String,
    },

    trainer: {
      type: String,
    },

    ownername: {
      type: String,
      required: 'Owner is required',
    },

    address: {
      type: String,
      required: 'Address is required',
    },

    location: {
      type: { type: String },
      coordinates: [Number]
    },

    postcode:{
      type: Number,
      required: 'Postcode is required',
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    image: String
  },
  {timestamps: true}
);

animalSchema.index({ location: '2dsphere' });

animalSchema.methods.getLatitude = function() {
  return 1;
}

animalSchema.methods.getLongitude = function() {
  return 1;
}

const Animal = mongoose.model ('Animal', animalSchema);

module.exports = Animal;
