const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let aluno1 = {
  nome: "",
  peso: 0,
  altura: 0,
  jogofavorito: "",
  matricula: 0,
  idade: 0
};

rl.question("Digite o seu nome: ", (nome) => {
  aluno1.nome = nome;

  rl.question("Digite o seu peso: ", (peso) => {
    aluno1.peso = parseFloat(peso);

    rl.question("Digite a sua altura: ", (altura) => {
      aluno1.altura = parseFloat(altura);

      rl.question("Digite o seu jogo favorito: ", (jogoFavorito) => {
        aluno1.jogofavorito = jogoFavorito;

        rl.question("Digite a sua matricula: ", (matricula) => {
          aluno1.matricula = parseInt(matricula);

          rl.question("Digite a sua idade: ", (idade) => {
            aluno1.idade = parseInt(idade);

            aluno1.peso = 77;
            aluno1.naturalidade = "Fortaleza";

            console.log("Olá " + aluno1.nome);
            console.log("O que você quer saber?");

            rl.question("[1]: PESO\n[2]: ALTURA\n[3]: JOGO FAVORITO\n[4]: MATRICULA\n[5]: IDADE\n[6]: NATURALIDADE\n[7]: SAIR\n", (answer) => {
              switch (answer) {
                case "1":
                  console.log("O seu peso é: " + aluno1.peso);
                  break;
                case "2":
                  console.log("A sua altura é: " + aluno1.altura);
                  break;
                case "3":
                  console.log("O seu jogo favorito é: " + aluno1.jogofavorito);
                  break;
                case "4":
                  console.log("A sua matricula é: " + aluno1.matricula);
                  break;
                case "5":
                  console.log("A sua idade é: " + aluno1.idade);
                  break;
                case "6":
                  console.log("A sua naturalidade é: " + aluno1.naturalidade);
                  break;
                case "7":
                  console.log("Saindo do programa...");
                  break;
                default:
                  console.log("Opção inválida.");
                  break;
              }

              rl.close();
            });
          });
        });
      });
    });
  });
});
