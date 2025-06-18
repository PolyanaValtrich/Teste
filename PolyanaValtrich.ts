const readline = require("readline-sync");

let aluno = [
  {
    nome: "Bruno",
    idade: "15 Anos",
    rm: 3636,
    serie: "9º Ano",
    cidade: "Severinia",
  },
];

function CadastroEscolar(): void {
  //certo
  console.log("\n--- MENU ---");
  console.log("1 - Criar Cadastro");
  console.log("2 - Listar Cadastro");
  console.log("3 - Atualizar Cadastro");
  console.log("4 - Remover Cadastro");
  console.log("0 - Sair");
}

function CriarCadastro(): void {
  //certo
  const nome = readline.question("Digite seu nome:");
  const idade = readline.question("Digite sua idade:");
  const rm = parseInt(readline.question("Digite seu Rm:"));
  const serie = readline.question("Insira sua serie:");
  const cidade = readline.question("Insira sua cidade:");
  const verificar = aluno.find((P) => P.rm === rm);
  {
    if (verificar) {
      console.log(`Rm ${rm} Ja Cadastrado`);
      return;
    }
  }

  aluno.push({ nome, idade, rm, serie, cidade });
  console.log(`conta criada com sucesso`);
}

function ListarCadastro(): void {
  //certo
  if (aluno.length === 0) {
    console.log("Nenhum aluno cadastrado.");
    return;
  }
  console.log("\n--- ALUNOS CADASTRADAS ---");
  aluno.forEach((aluno, i) => {
    console.log(`${i + 1}. ${aluno.nome}: Rm ${aluno.rm} | ${aluno.serie}`);
  });
}

function AtualizarCadastro(): void {
  // const rm = readline.question;
  // const index = aluno.findIndex((P) => P.rm === rm);
  // nome.index(readline.question("Digite o novo nome: "));
}

function RemoverCadastro(): void {
  //certo
  const nomeRemove = readline.question(
    "Digite o nome do aluno para remover: ");
  const index = aluno.findIndex((p) => p.nome.toLowerCase() === nomeRemove);
  if (index !== -1) {
    aluno.splice(index, 1);
    console.log(" Aluno removido com sucesso!");
  } else {
    console.log("Aluno nao encontrado.");
  }
}

let opcao: number;

do {
  CadastroEscolar(); // Mostra o menu
  opcao = readline.questionInt("Escolha uma opaco: "); // Lê a opção

  switch (opcao) {
    case 1:
      CriarCadastro();
      break;
    case 2:
      ListarCadastro();
      break;
    case 3:
      AtualizarCadastro();
      break;
    case 4:
      RemoverCadastro();
      break;
    case 0:
      console.log(" Encerramos o programa.");
      break;
    default:
      console.log(" Opcao invalida!");
  }
} while (opcao !== 0);
