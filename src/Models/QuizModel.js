/** @format */

class QuizModel {

  constructor(domanda, rispostaA, rispostaB, rispostaC, rispostaD) {
    this.id = 1;
    this.domanda = domanda;
    this.risposte = [rispostaA, rispostaB, rispostaC, rispostaD];
    this.corretta = this.risposte[0];
  }
}

module.exports = QuizModel;
