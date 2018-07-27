const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
            name: {
                type: String,
                required: "Name is required"
            },

            race: {
                type: String,
                required: "Name is required"
            },

            sex: {
                type: String,
                required: "Name is required"
            },

            color: {
                type: String,
                required: "Name is required"
            },

            datebirth: {
                type: Date,
                required: "Name is required"
            },

            Pedigree: {
                type: Boolean,
                required: "Name is required"
            },

            microship: {
                type: Boolean,
                required: "Name is required"
            },

            achievements: {
                type: String,
                required: "Name is required"
            },

            ownername: {
                type: String,
                required: "Name is required"
            },

            addressowner: {
                type: String,
                required: "Name is required"
            },

            // Crossed: id Reference to the other dog to cross

            {
                timestamps: true
            }
        );


        const Dog = mongoose.model("Dog", userSchema); module.exports = Dog;