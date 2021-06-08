const router = require('express').Router();let News = require('../models/news.model.js');router.route('/').get((req, res) => {    News.find()        .then(news => res.json(news))        .catch(err => res.status(400).json(`Error ${err}`));});router.route('/').delete((req, res) => {    News.findByIdAndDelete( req.query.id )        .then(data => res.json({message: "News was successfully deleted",data}))        .catch(err => res.status(400).json(`Error ${err}`));});router.route('/add').post((req, res) => {    const {        title,        text,        image    } = req.body;    const newNews = new News({        title,        text,        image    });    newNews.save()        .then((addedElement) => res.json({message: "card was successfully added",addedElement}))        .catch(err => res.status(400).json(`Error ${err}`));});module.exports = router;