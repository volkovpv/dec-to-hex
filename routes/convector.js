/**
 * Created by https://github.com/volkovpv on 12.2017.
 *
 * @api {get} /convector Преобразует число dec в hex формат и наоборот
 * @apiName GetConvector
 * @apiGroup Convector
 * @apiVersion 1.0.0
 * @apiParam {String} id число в виде строки которое надо преобразовать в другой формат
 * @apiSuccess {Object} отдает страницу title и новыем id
 */

'use strict';


let express = require('express'),
    bignum  = require('bignum');

let router = express.Router();

router.get('/', function(req, res) {
    let id          = req.query.id,
        response    = '';

    if(!id){
        response = 'ky-ky'
    } else {
        let arrId = id.split('-');
        response = (arrId.length > 1)?asDec(id):asHex(id)
    }

    return res.render('index', {title: 'Dec to Hex', resData: response});
});

function asDec(id) {
    id = bignum(id.replace(/-/g, ''), 16);
    return id.toString();
}

function asHex(id) {
    let hex = bignum(id).toString(16);
    return hex.substr(0, 4) + '-' + hex.substr(4, 4) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4);
}

module.exports = router;
