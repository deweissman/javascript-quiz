function createListItems(arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`
  }
  return items;
}

// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  ["How many planets are in the Solar System?", "8"],
  ["How many continents are there on Earth?", "7"],
  ["How many legs does an insect have?", "6"],
  ["What year was JavaScript created?", "1995"],
];

// 2. Store the number of questions answered correctly
let correct = 0;
let questionsRight = [];
let questionsWrong = [];


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
response = "";
for (let i = 0; i < quiz.length; i++) {
  response = prompt(`${quiz[i][0]}`);
  if (response === quiz[i][1]) {
    correct++;
    questionsRight.push(quiz[i][0]);
  } else {
    questionsWrong.push(quiz[i][0]);
  }
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correct} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(questionsRight)}</ol>
  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(questionsWrong)}</ol>
`;

document.querySelector("main").innerHTML = html;