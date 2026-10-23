'use strict'

const Cliente = use("App/Models/Cliente")

class UsuarioController {

    async index(){
        return await Cliente.all()
    }

    async show({ params }){
        const cliente = await Cliente.findOrFail(params.id)
        return cliente
    }

    async store({ request }){
        const data = request.only([
            'nome',
            'endereco',
            'telefone',
            'email',
            'ativo'
        ])

        const cliente = await Usuario.create(data)
        return cliente
    }

    async update({ params, request }){
        const cliente = await Usuario.findOrFail(params.id)
        const data = request.only([
            'nome',
            'endereco',
            'telefone',
            'email',
            'ativo'
        ])
        cliente.merge(data)
        await cliente.save()
        return cliente
    }

    async destroy({ params }){
        const cliente = await Cliente.findOrFail(params.id)
        return await cliente.delete()
    }

    async getUsersByName({ request }){
        const data = request.only(['nome'])
        return Usuario.getUsersByName(data.nome)
    }
}

module.exports = UsuarioController
