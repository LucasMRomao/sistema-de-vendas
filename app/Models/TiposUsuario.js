'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TiposUsuario extends Model {

    static get table(){
        return 'tipos_usuario'
    }

    usuarios(){
        return this.hasMany('App/Models/User')
    }
}

module.exports = TiposUsuario
