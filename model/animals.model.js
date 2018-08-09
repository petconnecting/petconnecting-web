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
    },

    color: {
      type: String,
      required: 'Color is required',
    },

    age: {
      type: Number,
      required: 'Date birth is required',
      min: [1, 'El animal no puede tener edad negativa'],
      max: [20, 'Tu animal no debería de ser tan viejo, que fuerte']
    },

    pedigree: {
      type: String,
      enum: ["YES", "NO"]
    },

    achievements: {
      type: String,
    },

    trainer: {
      type: String,
      required: 'Name is required',
    },

    ownername: {
      type: String,
      required: 'Name is required',
    },

    address: {
      type: String,
      required: 'Name is required',
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
