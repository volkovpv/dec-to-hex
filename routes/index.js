/**
 * Created by https://github.com/volkovpv on 12.2017.
 *
 * @api {get} / возвращает стартовую страницу
 * @apiName GetIndex
 * @apiGroup Index
 * @apiVersion 1.0.0
 * @apiSuccess {Object} отдает страницу с title
 */

'use strict';

let express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Dec to Hex' });
});

module.exports = router;
