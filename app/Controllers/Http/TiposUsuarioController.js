'use strict'

const TiposUsuario = use("App/Models/TiposUsuario")

class TiposUsuarioController {

    async index(){
        return await TiposUsuario.all()
    }

    async show({ params }){
        const TipoUsuario = await TiposUsuario.findOrFail(params.id)
        return TipoUsuario
    }

    async store({ request }){
        const data = request.only([
            'descricao'
        ])

        const TipoUsuario = await TiposUsuario.create(data)
        return TipoUsuario
    }

    async update({ params, request }){
        const TipoUsuario = await TiposUsuario.findOrFail(params.id)
        const data = request.only([
            'descricao'
        ])
        TipoUsuario.merge(data)
        await TipoUsuario.save()
        return TipoUsuario
    }

    async destroy({ params }){
        const TipoUsuario = await TiposUsuario.findOrFail(params.id)
        return await TipoUsuario.delete()
    }

}

module.exports = TiposUsuarioController
