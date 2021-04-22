'use strict'

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('swagger.js', path.join(__dirname, './templates/config.js'))
    cli.command.completed('create', 'config/swagger.js')

    await cli.copy('./node_modules/swagger-ui-dist', 'public/docs')
    cli.command.completed('copy assets', 'public/docs')
  } catch (error) {
    // ignore errors
  }
}
