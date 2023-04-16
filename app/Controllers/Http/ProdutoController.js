'use strict'

const Produto = use("App/Models/Produto")

class ProdutoController {

    async index(){
        return await Produto.all()
    }

    async show({ params }){
        const produto = await Produto.findOrFail(params.id)
        return produto
    }

    async store({ request }){
        const data = request.only([
            'descricao',
            'preco_custo',
            'preco_venda',
            'porcentagem_lucro',
            'quantidade_estoque',
            'id_setor'
        ])

        const produto = await Produto.create(data)
        return produto
    }

    async update({ params, request }){
        const produto = await Produto.findOrFail(params.id)
        const data = request.only([
            'descricao',
            'preco_custo',
            'preco_venda',
            'porcentagem_lucro',
            'quantidade_estoque',
            'id_setor'
        ])
        produto.merge(data)
        await produto.save()
        return produto
    }

    async destroy({ params }){
        const produto = await Produto.findOrFail(params.id)
        return await produto.delete()
    }

}

module.exports = ProdutoController
