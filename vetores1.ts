const readline = require('readline-sync'); // Importa a biblioteca para ler dados do terminal

// Define o tipo MaterialEscolar com nome e preco
type MaterialEscolar = {
  nome: string;
  preco: number;
}

// Lista inicial de materiais escolares
let materiais: MaterialEscolar[] = [
  { nome: 'Caderno', preco: 12.50 },
  { nome: 'Lápis', preco: 1.20 },
  { nome: 'Caneta azul', preco: 2.00 },
  { nome: 'Borracha', preco: 0.80 },
  { nome: 'Mochila', preco: 75.00 }
];

// Função que exibe o menu de opções para o usuário
function menu(): void {
  console.log('\n--- MENU DE MATERIAIS ESCOLARES ---');
  console.log('1 - Adicionar material');
  console.log('2 - Listar materiais');
  console.log('3 - Buscar material por nome');
  console.log('4 - Remover material por nome');
  console.log('0 - Sair');
}

// Função para adicionar um novo material ao estoque
function adicionarMaterial(): void {
  const nome = readline.question('Nome do material: ');        // Pergunta o nome do material
  const preco = readline.questionFloat('Preco do material: '); // Pergunta o preço do material
  materiais.push({ nome, preco });                             // Adiciona ao array materiais
  console.log('📦 Material adicionado com sucesso!');
}

// Função que lista todos os materiais cadastrados
function listarMateriais(): void {
  if (materiais.length === 0) {
    console.log('Nenhum material cadastrado.');
    return;
  }
  console.log('\n--- Lista de Materiais Escolares ---');
  materiais.forEach((mat, i) => {
    console.log(`${i + 1}. Nome: ${mat.nome} | Preço: R$ ${mat.preco.toFixed(2)}`);
  });
}

// Função para buscar materiais pelo nome (busca parcial e case insensitive)
function buscarMaterial(): void {
  const nomeBusca = readline.question('Digite o nome do material para buscar: ').toLowerCase();
  const encontrados = materiais.filter(mat => mat.nome.toLowerCase().includes(nomeBusca));
  if (encontrados.length > 0) {
    console.log(`🔍 Encontramos ${encontrados.length} material(is):`);
    encontrados.forEach(mat => {
      console.log(`- ${mat.nome} - R$ ${mat.preco.toFixed(2)}`);
    });
  } else {
    console.log('❌ Material não encontrado.');
  }
}

// Função para remover um material pelo nome (exatamente igual, case insensitive)
function removerMaterial(): void {
  const nomeRemove = readline.question('Digite o nome do material para remover: ').toLowerCase();
  const index = materiais.findIndex(mat => mat.nome.toLowerCase() === nomeRemove);
  if (index !== -1) {
    materiais.splice(index, 1);
    console.log('❌ Material removido com sucesso!');
  } else {
    console.log('Material não encontrado.');
  }
}

let opcao: number; // Guarda a opção do usuário

do {
  menu();  // Mostra o menu
  opcao = readline.questionInt('Escolha uma opaco: '); // Lê a opção

  switch (opcao) {
    case 1:
      adicionarMaterial();
      break;
    case 2:
      listarMateriais();
      break;
    case 3:
      buscarMaterial();
      break;
    case 4:
      removerMaterial();
      break;
    case 0:
      console.log("📚 Encerramos o programa.");
      break;
    default:
      console.log("⚠️ Opção invalida!");
  }
} while (opcao !== 0); // Continua até o usuário escolher 0 (sair)
