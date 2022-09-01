const head = require('../head');
const assertEqual = require('../assertEqual');

// Test Code Area
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([555]), 555);
assertEqual(head([]), undefined);