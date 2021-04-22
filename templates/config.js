'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger Spesification Docs
  | https://swagger.io/docs/specification/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  options: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Adonis 💘 Swagger',
        version: '1.0.0',
        description: 'Describe your API 🚀'
      },
      servers: [
        {url: 'http://localhost:3333/', description: 'Local'},
        {url: 'http://localhost:3030/', description: 'Development'}
      ],
      // Example security definitions.
      security:[
        {
          bearerAuth: []
        }
      ]
    },
    // Path to the API docs
    // Sample usage
    // apis: [
    //    'docs/**/*.yml',    // load recursive all .yml file in docs directory
    //    'docs/**/*.js',     // load recursive all .js file in docs directory
    // ]
    apis: [
      'app/**/*.js',
      'start/routes.js'
    ]
  }
}