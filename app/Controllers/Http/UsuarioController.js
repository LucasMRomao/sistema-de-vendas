'use strict'

const Usuario = use("App/Models/User")

class UsuarioController {

    async index(){
        return await Usuario.all()
    }

    async show({ params }){
        const usuario = await Usuario.findOrFail(params.id)
        return usuario
    }

    async store({ request }){
        const data = request.only([
            'usuario',
            'nome',
            'email',
            'senha',
            'tipo_usuario'
        ])

        const usuario = await Usuario.create(data)
        return usuario
    }

    async update({ params, request }){
        const usuario = await Usuario.findOrFail(params.id)
        const data = request.only([
            'usuario',
            'nome',
            'email',
            'senha',
            'tipo_usuario'
        ])
        usuario.merge(data)
        await usuario.save()
        return usuario
    }

    async destroy({ params }){
        const usuario = await Usuario.findOrFail(params.id)
        return await usuario.delete()
    }

    async validarusuario({ request }){
        const data = request.only([
            'usuario',
            'senha'
        ])

        return Usuario.validarUsuario(data)
    }
}

module.exports = UsuarioController
