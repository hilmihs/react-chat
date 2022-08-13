var express = require('express');
var router = express.Router();
var Chat = require('../models/chat')
const { Response } = require('../helpers/util')


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const data = await Chat.find()
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
  }


});

router.post('/', async function (req, res, next) {
  try {
    const { username, title, id } = req.body
    const chat = await Chat.create({ id: id ? parseInt(id) : 0 , title, username })
    await chat.save()
    res.json(new Response(chat))
  } catch (e) {
    console.log(e)
    res.status(500).json(new Response(e, false))
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    const { title, username } = req.body
    const data = await Chat.findByIdAndUpdate(
      req.params.id,
      {
        title,
        username
      }, {
      new: true
    })
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
  }
});
router.delete('/:id', async function (req, res, next) {
  try {
    const data = await Chat.findByIdAndRemove(req.params.id)
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
  }


});
module.exports = router;