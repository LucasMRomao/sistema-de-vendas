'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('cpf', 80)
      table.string('endereco', 255)
      table.string('telefone', 80)
      table.string('email', 255)
      table.double('limite')
      table.boolean('ativo')
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
