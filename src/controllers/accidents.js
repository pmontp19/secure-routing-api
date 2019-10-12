'use strict'

const { Types } = require('dynamoose')
const Model = require('../models/accidents')
const Boom = require('@hapi/boom')

class Accident {
  constructor (id = null) {
    if (!id) throw Boom.badRequest('Accident id not found or invalid')
    this.id = id
  }

  static async add (data = null) {
    try {
      if (!data) throw new Boom('Bad request, new accident data not found or invalid')

      const accident = await Model.create(data)

      return Promise.resolve(accident)
    } catch (error) {
      return Promise.reject(new Boom(error))
    }
  }

  async get () {
    try {
      const accidentData = await Model.findOne({
        $or: [
          { _id: new RegExp('^[0-9a-fA-F]{24}$').test(this.id) ? Types.ObjectId(this.id) : null }
        ]
      }).exec()

      if (!accidentData) throw Boom.notFound('Accident not found')

      return Promise.resolve(accidentData)
    } catch (error) {
      return Promise.reject(new Boom(error))
    }
  }

  static async getAll (query = {}) {
    try {
      const accident = await Model.find(query).exec()
      return Promise.resolve(accident)
    } catch (error) {
      return Promise.reject(new Boom(error))
    }
  }

  async remove () {
    try {
      const accidentData = await this.get()
      await Model.deleteOne({ _id: accidentData._id })

      return Promise.resolve(accidentData)
    } catch (error) {
      return Promise.reject(new Boom(error))
    }
  }

  static async findOne (query = {}) {
    try {
      const accidentData = await Model.findOne(query).exec()

      return Promise.resolve(accidentData)
    } catch (error) {
      return Promise.reject(new Boom(error))
    }
  }

  async update (data = {}) {
    try {
      const accidentData = await this.get()
      await Model.updateOne({ _id: accidentData._id }, data)

      return Promise.resolve(await this.get())
    } catch (error) {
      return Promise.reject(new Boom(error))
    }
  }
}

module.exports = Accident
