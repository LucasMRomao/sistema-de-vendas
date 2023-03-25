'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('usuario', 80).notNullable().unique()
      table.string('nome', 50).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('senha', 60).notNullable()
      table.integer('tipo_usuario').unsigned().references('id').inTable('tipos_usuario').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UserSchema
