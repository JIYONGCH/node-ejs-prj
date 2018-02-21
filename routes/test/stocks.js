var express = require('express');
var router = express.Router();
// 웹 크롤링에 필요한 모듈
var request = require('request');
var cheerio = require('cheerio');

var url = 'https://brunch.co.kr/'; // 타겟 페이지

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test/stocks', { title: 'stocks' });
    // 웹 크롤링
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
            crawlingArray.push(crawlingInfo); // json 형태로 담기
            console.log('array=========================>>>>>>>'+JSON.stringify(crawlingArray));
            console.log('array_length=========================>>>>>>>'+JSON.stringify(crawlingArray).length);
            i++;
        });
        // return crawlingArray;
        // res.send({});
    });
});



module.exports = router;
