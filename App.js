/** @format */

class User {
  constructor(username, score = 0) {
    this.username = username;
    this.score = score;
    this.questionsAnswered = 0;
  }

  updateScore(points) {
    this.score += points;
    this.questionsAnswered += 1;
  }

  getScore() {
    return this.score;
  }

  getQuestionsAnswered() {
    return this.questionsAnswered;
  }
}

class Question {
  constructor(category, questionText, options, answer) {
    this.category = category;
    this.questionText = questionText;
    this.options = options;
    this.answer = answer;
  }

  isCorrect(answer) {
    return this.answer === answer;
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    this.currentQuestionIndex += 1;
    return this.getCurrentQuestion();
  }

  hasMoreQuestions() {
    return this.currentQuestionIndex < this.questions.length - 1;
  }
}

class Game {
  constructor(players, questions) {
    this.players = players;
    this.quiz = new Quiz(questions);
    this.currentPlayerIndex = 0;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  nextPlayer() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }

  answerCurrentQuestion(answer) {
    const currentQuestion = this.quiz.getCurrentQuestion();
    const currentPlayer = this.getCurrentPlayer();
    if (currentQuestion.isCorrect(answer)) {
      currentPlayer.updateScore(10);
      if (this.quiz.hasMoreQuestions()) {
        this.quiz.nextQuestion();
      } else {
        console.log("Il quiz è finito!");
      }
      this.nextPlayer();
    }
  }
}

class GameController {
  constructor(game) {
    this.game = game;
  }

  startGame() {
    this.displayQuestion();
  }

  displayQuestion() {
    const currentQuestion = this.game.quiz.getCurrentQuestion();
    console.log(`Domanda: ${currentQuestion.questionText}`);
    currentQuestion.options.forEach((option, index) => {
      console.log(`${index + 1}: ${option}`);
    });
  }

  handleAnswer(answer) {
    this.game.answerCurrentQuestion(answer);
    if (this.game.quiz.hasMoreQuestions()) {
      this.displayQuestion();
    } else {
      this.endGame();
    }
  }

  endGame() {
    console.log("Gioco finito! Ecco i risultati:");
    this.game.players.forEach((player) => {
      console.log(`${player.username}: ${player.getScore()} punti`);
    });
  }
}

// Esempio di utilizzo
const questions = [
  new Question(
    "Geografia",
    "Qual è la capitale della Francia?",
    ["Parigi", "Londra", "Berlino", "Madrid"],
    "Parigi"
  ),
  new Question(
    "Storia",
    "Chi ha scoperto l'America?",
    ["Cristoforo Colombo", "Marco Polo", "Amerigo Vespucci", "Leif Erikson"],
    "Cristoforo Colombo"
  ),
  // Aggiungi altre domande qui
];

const players = [new User("Giocatore 1"), new User("Giocatore 2")];

const game = new Game(players, questions);
const gameController = new GameController(game);

gameController.startGame();

gameController.handleAnswer("Parigi");
gameController.handleAnswer("Marco Polo");
