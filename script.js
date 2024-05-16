class AppQuizziamoci {
  utenti = [
    {
      email: "",
      password: "",
      username: "",
      score: 0,
      partiteGiocate: 0,
      partiteVinte: 0,
      partitePerse: 0,
      partitePareggiate: 0,
    },
  ];
  classifica = [];
  quiz = [
    {
      domanda: "",
      rispostaA: { risposta: "", corretta: false },
      rispostaB: { risposta: "", corretta: false },
      rispostaC: { risposta: "", corretta: false },
      rispostaD: { risposta: "", corretta: true },
      id: 0,
    },
  ];

  argomenti = [{ argomento: "", idRifDomanda: [quiz[0].id, quiz[1].id] }];

  party = [
    {
      nomeParty: "",
      partecipanti: [
        { username: "", email: "" },
        { username: "", email: "" },
        { username: "", email: "" },
        { username: "", email: "" },
      ],
      id: 0,
    },
  ];
}
