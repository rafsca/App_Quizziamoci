/** @format */
const QuizModel = require('../Models/QuizModel.js');
const ArgumentModel = require('../Models/ArgumentModel.js');

class QuizController {
  constructor(nome, domanda, rispostaA, rispostaB, rispostaC, rispostaD, corretta) {
    this.argument = new ArgumentModel(nome);
    this.quiz = new QuizModel(domanda, rispostaA, rispostaB, rispostaC, rispostaD, corretta);
  }

  showQuiz() {
    return {
      argument: this.argument.nome,
      domanda: this.quiz.domanda,
      rispostaA: this.quiz.rispostaA,
      rispostaB: this.quiz.rispostaB,
      rispostaC: this.quiz.rispostaC,
      rispostaD: this.quiz.rispostaD,
      corretta: this.quiz.corretta,
    };
  }
}

module.exports = QuizController;
