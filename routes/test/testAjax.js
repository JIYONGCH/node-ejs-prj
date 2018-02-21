var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', function (req, res, next) {
   // res.send('testAjax');
    res.render("test/testAjax",{
         title:'<TestAjax>',
         param1:'testForm',
         pageCd:'testAjax'
    });
});

/* POST 호출 처리 */
router.post('/post/ajax', function (req, res, next) {
   console.log('POST 방식으로 서버 호출됨.');

   //view 에 있는 값을 받아서
    var msg = req.body.msg;

    msg='[ testAjax msg ] : '+msg;

    //json 형식으로 보내 준다.
    res.send({
        result:true,
        msg:msg
    });
});

module.exports = router;