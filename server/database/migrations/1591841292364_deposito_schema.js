'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepositoSchema extends Schema {
  up () {
    this.create('depositos', (table) => {
      table.increments()
      table.string('content').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('depositos')
  }
}

module.exports = DepositoSchema
