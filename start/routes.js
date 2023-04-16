'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.resource('/tiposusuario', 'TiposUsuarioController').apiOnly()
Route.resource('/usuarios', 'UsuarioController').apiOnly()
Route.resource('/produtos', 'ProdutoController').apiOnly()
Route.resource('/setores', 'SetorController').apiOnly()

Route.post('/validarusuario', 'UsuarioController.validarusuario')
Route.put('/resetarsenhausuario/:id', 'UsuarioController.resetarSenhaUsuario')
Route.post('/getusersbyname', 'UsuarioController.getUsersByName')
Route.post('/getusersbyusuario', 'UsuarioController.getUsersByUsuario')
Route.post('/getusersbyemail', 'UsuarioController.getUsersByEmail')
Route.post('/getusersbytipo', 'UsuarioController.getUsersByTipo')