const express = require('express')

const {errorHandler} = require('../middleware')

const routersInit = config => {
  const router = express()
  router.use('/users', users(models,{config}))
  router.use(errorHandler)
}

module.exports=routersInit;