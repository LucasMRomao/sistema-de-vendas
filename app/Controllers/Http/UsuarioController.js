'use strict'

const Usuario = use("App/Models/User")

class UsuarioController {

    async index(){
        return await Usuario.all()
    }

    async show({ params }){
        const usuario = await Usuario.findOrFail(params.id)
        await usuario.load('tipoUsuario')
        return usuario
    }

    async store({ request }){
        const data = request.only([
            'usuario',
            'nome',
            'email',
            'senha',
            'tipo_usuario_id'
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
            'tipo_usuario_id'
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

    async resetarSenhaUsuario({ params }){
        return Usuario.resetarSenhaUsuario(params.id)
    }

    async getUsersByName({ request }){
        const data = request.only(['nome'])
        return Usuario.getUsersByName(data.nome)
    }

    async getUsersByUsuario({ request }){
        const data = request.only(['usuario'])
        return Usuario.getUsersByUsuario(data.usuario)
    }

    async getUsersByEmail({ request }){
        const data = request.only(['email'])
        return Usuario.getUsersByEmail(data.email)
    }

    async getUsersByTipo({ request }){
        const data = request.only(['idtipo'])
        return Usuario.getUsersByTipo(data.idtipo)
    }
}

module.exports = UsuarioController
