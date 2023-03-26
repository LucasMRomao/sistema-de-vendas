'use strict'

/*
|--------------------------------------------------------------------------
| TiposUsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class TiposUsuarioSeeder {
  async run () {
    await Database.table('tipos_usuario').insert({
      descricao: 'Administrador'
    })

    await Database.table('tipos_usuario').insert({
      descricao: 'Colaborador'
    })

    await Database.table('tipos_usuario').insert({
      descricao: 'Cliente'
    })
  }
}

module.exports = TiposUsuarioSeeder
