'use strict'

const Usuario = use("App/Models/User")

class UsuarioController {

    async index(){
        return await Usuario.all()
    }

    async show({ params }){
        const TipoUsuario = await Usuario.findOrFail(params.id)
        return TipoUsuario
    }

    async store({ request }){
        const data = request.only([
            'usuario',
            'nome',
            'email',
            'senha',
            'tipo_usuario'
        ])

        const TipoUsuario = await Usuario.create(data)
        return TipoUsuario
    }

    async update({ params, request }){
        const TipoUsuario = await Usuario.findOrFail(params.id)
        const data = request.only([
            'usuario',
            'nome',
            'email',
            'senha',
            'tipo_usuario'
        ])
        TipoUsuario.merge(data)
        await TipoUsuario.save()
        return TipoUsuario
    }

    async destroy({ params }){
        const TipoUsuario = await Usuario.findOrFail(params.id)
        return await TipoUsuario.delete()
    }
}

module.exports = UsuarioController
