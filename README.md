# Pig Latin Translator

## Overview

This website will allow a user to enter a string and then return the Pig Latin translation of that string.

## Specifications

For the words in the string, the program will perform the following operations:

* For words beginning in a vowel, the program will add 'ay' to the end of the word
  - Example Input: 'aardvark'
  - Example Output: 'aardvarkay'
* Words beginning with an initial consonant will have the consonant moved to the end of the string and 'ay' appended.
  - Example Input: 'basket'
  - Example Output: 'asketbay'
* Words beginning with 'y' will be treated as consonants.
  - Example Input: 'yak'
  - Example Output: 'akyay'
* Words with multiple initial consonants will have all initial consonants moved to the end and 'ay' appended.
  - Example Input: 'truck'
  - Example Output: 'ucktray'
* Words with initial consonants which include 'q' should move any subsequent 'u' along with the 'q'
  - Example Input: 'squeal'
  - Example Output: 'ealsquay'

## Installation

Clone the repository to the folder of your choice and open the index.html file in the browser of your choice. We like choice around here.

## Usage

Input a string and click 'translate' to view the translated string.

## Contributors

Kai Leahy and Ken Rutan

## License

Licensed MIT.
