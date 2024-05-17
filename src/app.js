class AppQuizziamoci {
  user = [];
  partite = [];
  argomenti = [];
  quiz = [];

  login() {}

  register() {}

  deleteProfile() {}

  changePassword() {}

  changeUsername() {}

  showLeaderboard() {}

  showLocalLeaderboard() {}

  showArgoments() {}

  showQuiz() {}

  createPrivateMatch() {}

  joinPrivateMatch() {}

  joinPrivateMatchById() {}

  startPublicMatch() {}

  createParty() {}

  showPartyList() {}

  showPartyLeaderboard() {}

  joinParty() {}

  showRanking() {}

  showProfile() {}

  showMatchHistory() {}

  logout() {}
}

class User {
  email: string | null;
  password: string | null;
  username: string | null;
  id: number | null;
  constructor() {
    this.email = null;
    this.password = null;
    this.username = null;
    this.id = null;
  }
}

class Partita {
  id: number | null;
  argomento: string | null;
  constructor() {
    this.id = null;
    this.argomento = null;
  }
}

class Argomento {
  id: number | null;
  nome: string | null;
  constructor() {
    this.id = null;
    this.nome = null;
  }
}

class Quiz {
  id: number | null;
  domanda: string | null;
  rispostaA: string | null;
  rispostaB: string | null;
  rispostaC: string | null;
  rispostaD: string | null;
  corretta: string | null;
  constructor() {
    this.id = null;
    this.domanda = null;
    this.rispostaA = null;
    this.rispostaB = null;
    this.rispostaC = null;
    this.rispostaD = null;
    this.corretta = null;
  }
}
