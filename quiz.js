var readlineSync = require('readline-sync')

var scores = []
var playerName = readlineSync.question('Enter your name: ')
function quiz(){
  var questionOne = {
    question: 'Which isn\'t a Tesla car?',
    options: ['Model X', 'Model P', 'Model 3', 'Roadster'],
    answer: 'Model P'
  }

  var questionTwo = {
    question: 'What\'s the biggest animal in the world?',
    options: ['Giraffe', 'Hippo', 'Shark', 'The Blue Whale'],
    answer: 'The Blue Whale'
  }

  var questionThree = {
    question: 'Do cats fly?',
    options: ['Yes', 'No', 'Always'],
    answer: 'No'
  }

  var questionFour = {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Leonardo de Caprio', 'M F Hussain', 'Michelangelo'],
    answer: 'Leonardo da Vinci'
  }

  var questionFive = {
    question: 'Which one is not a programming language',
    options: ['Go', 'Scala', 'Ruby', 'Steep'],
    answer: 'Steep'
  }

  var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive
  ]
  score = 0
  console.log('Welcome '+ playerName + "...")
  console.log('=============================\n')
  for(i=0; i<questions.length; i++){
    console.log(questions[i].question)
    var answer = readlineSync.keyInSelect(questions[i].options, questions[i].question)
    if (questions[i].options[answer].toLowerCase() == questions[i].answer.toLowerCase()){
        score += 1
    }
  }
  console.log('\n'+ playerName+ ' your score is: ' +  score )
  scores.push(score)
}

var play = readlineSync.question('Press Y to start the game: ');
while(play == 'y'){
  quiz()
  var play = readlineSync.question('Do you want to play again? press Y to begin: ');
}
scores.sort(function(a,b){return a-b})
console.log("High Score: " + scores[scores.length - 1])

console.log('=====XXX===== Thank you =====XXX=====')
