const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["DOG", "HORSE"]
    },
    name: {
      type: String,
      required: "Name is required"
    },

    race: {
      type: String,
      required: "Race is required"
    },

    sex: {
      type: String,
      required: "Sex is required"
    },

    color: {
      type: String,
      required: "Color is required"
    },

    age: {
      type: Number,
      required: "Date birth is required"
    },

    pedigree: {
      type: String,
      required: "Pedigree is required"
    },

    microship: {
      type: String,
      required: "Microship is required"
    },

    achievements: {
      type: String,
    },

    trainer: {
      type: String,
      required: "Name is required"
    },

    ownername: {
      type: String,
      required: "Name is required"
    },

    //Añadir localización 
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  { timestamps: true }
);

const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
