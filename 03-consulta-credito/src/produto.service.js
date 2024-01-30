const produtoModel = require('./produto.model')

async function cadastrarProduto (produto) {
  const produtoCriado = await produtoModel.create(produto)
  return produtoCriado
}

async function consultarProdutos () {
  const produtos = await produtoModel.findAll()
  return produtos
}

async function atualizarProduto (produto) {
  const produtoAtualizado = await produtoModel.updateOne(
    { _id: produto._id },
    produto
  )

  return produtoAtualizado
}

async function deletarProduto (produto) {
  const produtoDeletado = await produtoModel.deleteOne(
    { _id: produto._id },
    produto
  )

  return produtoDeletado
}

module.exports = {
  cadastrarProduto,
  atualizarProduto,
  consultarProdutos,
  deletarProduto
}
