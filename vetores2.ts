const readline = require("readline-sync");

let conta = [{ nome: "Poly", senha: 1234, Nconta: "654321", saldo: 0 }];

function MenuConta(): void {
  console.log("\n--- MENU ---");
  console.log("1 - Criar Conta");
  console.log("2 - Listar Contas");
  console.log("3 - Acessar Conta");
  console.log("4 - Remover Conta");
  console.log("0 - Sair");
}

function CriarConta(): void {
  const nome = readline.question("Digite seu nome:");
  const senha = readline.question("Digite sua senha:", { hideEchoBack: true });
  const Nconta = readline.question("Digite sua conta:");
  const saldo = parseFloat(readline.question("Insira o valor:"));
  const verificar = conta.find((P) => P.Nconta === Nconta);
  {
    if (verificar) {
      console.log(`conta ${Nconta} Ja Cadastrada`);
    }
  }

  {
    if (senha.length < 5) {
      console.log("Senha invalida");
      return;
    }
  }

  conta.push({ nome, senha, Nconta, saldo });
  console.log(`conta${Nconta} criada com sucesso`);
}

function ListarConta(): void {
  console.log("\n--- CONTAS CADASTRADAS ---");
  conta.forEach((conta, i) => {
    console.log(`${i + 1}. ${conta.nome}: ${conta.Nconta}`);
  });
}

function AcessarConta(): void {
  const numero = readline.question("Digite o numero da conta:");
  const senha = readline.question("Digite a senha:", { hideEchoBack: true });

  const usuario = conta.find((P) => P.Nconta === numero && P.senha === senha);

  if (!usuario) {
    console.log("Conta não encontrada ou senha incorreta!");
    return;
  }

  console.log(`Bem-vindo(a), ${usuario.nome}!`);
  AcessarConta(nome);
}

function RemoverConta(): void {
  const numero = readline.question("Numero da conta que deseja remover:");
  const senha = readline.question("Senha da conta:", { hideEchoBack: true });

  const index = conta.findIndex(
    (P) => P.Nconta === numero && P.senha === senha
  );

  if (index !== -1) {
    conta.splice(index, 1);
    console.log("Conta removida com sucesso");
  } else {
    console.log("Conta nao encontrada!");
  }
}

  do {
    MenuConta()
    let opcao = readline.questionInt("Escolha uma opcao: ");

    switch (opcao) {
      case 1:
        CriarConta();
        break;
      case 2:
        ListarConta();
        break;
      case 3:
        AcessarConta();
        break;
      case 4:
        RemoverConta();
        break;
      case 0:
        console.log("Encerramos o programa.");
        break;
      default:
        console.log("Opcao invalida!");
    }
  } while (opcao !== 0); 


  // function AtualizarCadastro(): void {
  //   let rm = readline.question 
  //   let index = aluno.findIndex(
  //   (P) => P.rm === rm);
  //       nome.index(readline.question("Diguite o novo nome: "))
  //   }