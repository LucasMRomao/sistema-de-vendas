'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TiposUsuarioSchema extends Schema {
  up () {
    this.create('tipos_usuario', (table) => {
      table.increments()
      table.string('descricao', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipos_usuario')
  }
}

module.exports = TiposUsuarioSchema
