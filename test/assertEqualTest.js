const assertEqual = require('../assertEqual');

// Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
//Comparing identical strings
assertEqual("Bootcamp", "Bootcamp");
//Comparing identical numbers
assertEqual(1, 1);
//Comparing non-identical numbers
assertEqual(1, 2);
