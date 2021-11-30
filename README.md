# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sabrieai/lotide`

**Require it:**

`const _ = require('@sabrieai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1,arr2)`: function that shows if 2 arrays are identical, returns 😃😃😃 or 🤢🤢🤢
* `assertEqual(actual,expected)`: function that shows if the actual value recieved is identical to the expected value, returns 😃😃😃 or 🤢🤢🤢
* `assertObjectsEqual(object1,object2)`: function that shows if 2 objects are identical, returns 😃 or 🤢
* `countLetters(string)`: function that returns an object containing the letters in a string alongside their total instances in the string i.e {h:4}
* `countOnly(allItems,itemsToRemove)`: function that counts the number of times an array holds what an object is looking for, returns a number
* `eqArrays(arr1,arr2)`: function that checks if 2 arrays are identical, returns true or false
* `eqObjects(object1,object2)`: function that checks if 2 arrays are identical, returns true or false
* `findKey(object,callback)`: function that loops through an object and returns the key that matches the retuned value of a callback
* `findKeyByValue(object,value)`: function that loops through an object and returns the key that matches an input value 
* `head(array)`: function that returns the first element in an array
* `letterPositions(sentence)`: function that checks the position(s) of a letter in a sentence, returns an object
* `map(array, callback)`: function that returns a new array containing all elements from the sorce array transformed using the callback function
* `middle(array)`: function that returns the middle element in an array, will return a single element array if the array is odd and a two element array if it is odd
* `tail(array)`: function that returns all but the first element of an array
* `takeUntil(array, callback)`: function that returns a new array containing all elements of the source array until the calback value is reached 
* `without(source,itemsToRemove)`: function that returns a new array containing the elements from the source array that do not match itemsToRemove