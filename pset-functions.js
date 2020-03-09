/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

function blackJack(playerCardScore, dealerCardScore) {
  if (playerCardScore > 21 && dealerCardScore > 21) {
    return 0
  } else if (playerCardScore > 21) {
    return dealerCardScore
  } else if (dealerCardScore > 21) {
    return playerCardScore
  } else {
    return Math.max(playerCardScore, dealerCardScore)
  }
}

console.log(blackJack(21, 17));

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

function scrabbleScore(word){

  const wordArray = word.toUpperCase().split("")
  let sum = 0

  const value1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
  const value2 = ["D", "G"]
  const value3 = ["B", "C", "M", "P"]
  const value4 = ["F", "H", "V", "W", "Y"]
  const value5 = ["K"]
  const value8 = ["J", "X"]
  const value10 = ["Q", "Z"]

wordArray.forEach((current) => {
  //no return
  if (["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].includes(current)) {
    sum+=1
  } else if (["D", "G"].includes(current)) {
    sum+=2
  } else if (value3.includes(current)) {
    sum+=3
  } else if (value4.includes(current)) {
    sum+=4
  } else if (value5.includes(current)) {
    sum+=5
  } else if (value8.includes(current)) {
    sum+=8
  } else if (value10.includes(current)) {
    sum+=10
  } else {
    console.log("Something went wrong.");
  }
})
  return sum
}

console.log(scrabbleScore("cabbage"));
console.log(scrabbleScore("javascript"));
console.log(scrabbleScore("function"));

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line

const isPalindrome = (word) => {
  const reverseWord = word.split("").reverse().join("")
  return word === reverseWord
}

console.log(isPalindrome("noon"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("moon"))
console.log(isPalindrome("run"));

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line

const doubleLetters = (word) => {

  for (let i= 0; i < word.length; i++){
    if (word[i] === word[i+1]){
      return true
    }
  }

    return false
}

console.log(doubleLetters("loop"))
console.log(doubleLetters("rune"))
console.log(doubleLetters("apple"));

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

const wordCount = (phrase) => {
  const words = phrase.split(" ")

  const wordTracker = {}

  words.forEach((currentWord) => {
    if (wordTracker[currentWord] === undefined) {
      wordTracker[currentWord] = 1
    } else {
      wordTracker[currentWord] +=1
    }
  })

  return wordTracker
}

console.log(wordCount("olly olly in come free"));

console.log(wordCount("Baby shark, doo doo doo doo doo doo"));

console.log(wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"));

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
