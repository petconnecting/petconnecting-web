const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: "type is required"
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
      enum: ["MALE", "FEMALE"]
    },

    color: {
      type: String,
      required: "Color is required"
    },

    age: {
      type: Number,
      required: "Date birth is required"
    },

    // pedigree: {
    //   type: String,
    //   enum: ["YES", "NO"]
    // },

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
