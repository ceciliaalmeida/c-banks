'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const deposito = use('App/Models/Post')
/**
 * Resourceful controller for interacting with depositos
 */
class DepositoController {
  /**
   * Show a list of all depositos.
   * GET depositos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const Depositos = await deposito.all()

    return Depositos
  }

  /**
   * Render a form to be used for creating a new deposito.
   * GET depositos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new deposito.
   * POST depositos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const Data = request.only(['content']);
    const deposito = await deposito.create(Data);

    return post;
  }

  /**
   * Display a single deposito.
   * GET depositos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const deposito = await Deposito.find(params.id);

    return deposito
  }

  /**
   * Render a form to update an existing deposito.
   * GET depositos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update deposito details.
   * PUT or PATCH depositos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['contente'])
    const post = await Deposito.find(params.id)

    post.merge(data)
    await deposito.save

    return post
  }

  /**
   * Delete a deposito with id.
   * DELETE depositos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const post = await Deposito.find(params.id)

    await post.delete()
    


  }
}

module.exports = DepositoController
