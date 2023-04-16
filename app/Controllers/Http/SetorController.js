'use strict'

const Setor = use("App/Models/Setor")

class SetorController {

    async index(){
        return await Setor.all()
    }

    async show({ params }){
        const setor = await Setor.findOrFail(params.id)
        return setor
    }

    async store({ request }){
        const data = request.only([
            'descricao'
        ])

        const setor = await Setor.create(data)
        return setor
    }

    async update({ params, request }){
        const setor = await Setor.findOrFail(params.id)
        const data = request.only([
            'descricao'
        ])
        setor.merge(data)
        await setor.save()
        return setor
    }

    async destroy({ params }){
        const produto = await Setor.findOrFail(params.id)
        return await produto.delete()
    }

}

module.exports = SetorController
