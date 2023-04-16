'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('descricao').notNullable()
      table.decimal('preco_custo').notNullable()
      table.decimal('preco_venda').notNullable()
      table.decimal('porcentagem_lucro').notNullable()
      table.integer('quantidade_estoque').notNullable()
      table.integer('id_setor')//.references('id').inTable('setores').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
