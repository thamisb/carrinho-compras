// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionar() {
  const produtoSelect = document.getElementById('produto');
  const quantidadeInput = document.getElementById('quantidade');

  const produtoSelecionado = produtoSelect.value;
  const quantidadeSelecionada = parseInt(quantidadeInput.value);

  if (!isNaN(quantidadeSelecionada) && quantidadeSelecionada > 0) {
    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinho.find(item => item.produto === produtoSelecionado);

    if (produtoExistente) {
      // Se o produto já estiver no carrinho, atualiza a quantidade
      produtoExistente.quantidade = quantidadeSelecionada;
    } else {
      // Se o produto não estiver no carrinho, adiciona
      carrinho.push({
        produto: produtoSelecionado,
        quantidade: quantidadeSelecionada,
      });
    }

    atualizarCarrinho();
  } else {
    alert('Por favor, insira uma quantidade válida.');
  }
}

// Função para limpar o carrinho
function limpar() {
  carrinho = [];
  atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
  const listaProdutos = document.getElementById('lista-produtos');
  const valorTotalSpan = document.getElementById('valor-total');

  // Limpa a lista de produtos
  listaProdutos.innerHTML = '';

  let total = 0;

  // Adiciona os produtos ao carrinho
  carrinho.forEach(item => {
    const produtoElemento = document.createElement('section');
    produtoElemento.classList.add('carrinho__produtos__produto');

    const valorProduto = parseInt(item.produto.split('R$')[1]);
    const subtotal = valorProduto * item.quantidade;

    produtoElemento.innerHTML = `<span class="texto-azul">${item.quantidade}x</span> ${item.produto} <span class="texto-azul">R$${subtotal}</span>`;

    listaProdutos.appendChild(produtoElemento);

    total += subtotal;
  });

  // Atualiza o valor total
  valorTotalSpan.textContent = `R$${total}`;
}
