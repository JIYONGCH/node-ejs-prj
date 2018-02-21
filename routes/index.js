var express = require('express');
var router = express.Router();

/* GET home page.
*  - res.render 함수를 통해 index.ejs 파일로 랜더링 한다.
* */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Express',
        // parameter: 'Parameter'
      }
  );
});

module.exports = router;
