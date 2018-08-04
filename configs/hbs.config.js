const hbs = require ('hbs');
const path = require ('path');

// Bien :) 

// Aquí pondríamos el registerPartials con la url de la carpetita

hbs.registerHelper('isSelected', (type, expected, options) => {
    if (type.toUpperCase() === expected.toUpperCase()) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
})