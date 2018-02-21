var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

var url = 'https://brunch.co.kr/';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test/stocks', { title: 'stocks' });

    request(url, function (error, reponse, body) {
        if(error) throw error;
        // console.log(body);

        var $ = cheerio.load(body);
        // console.log($);

        var postElements = $('div.wrap_slide div.item_pic');

        var crawlingArray = new Array();

        var i = 0;
        postElements.each(function () {
            var crawlingInfo = new Object();
            var postTitle = $(this).find('div strong').text();
            var postCont = $(this).find('div span').text();
            crawlingInfo.inx=i;
            crawlingInfo.title=postTitle;
            crawlingInfo.cont=postCont;
            console.log('i------======================>>>'+i);
            console.log('postTitle------>>>'+postTitle);
            console.log('postUrl------>>>'+postCont);
            crawlingArray.push(crawlingInfo);
            console.log('array=========================>>>>>>>'+JSON.stringify(crawlingArray));
            console.log('array_length=========================>>>>>>>'+JSON.stringify(crawlingArray).length);
            i++;
        });
        // return crawlingArray;
        // res.send({});
    });});



module.exports = router;
