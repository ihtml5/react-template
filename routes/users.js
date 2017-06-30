var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id:1,
    text:"啛啛喳喳擦擦擦",
    completed:false,
    typeId:1
  },{
    id:0,
    text:"是是是",
    completed:false,
    typeId: 0
  },{
    id: 3,
    text:"1111",
    completed: false,
    typeId: 0
  },{
    id: 2,
    text: "1擦擦擦",
    completed: false,
    typeId: 2
  }]);
});
router.post('/', function(req,res,next) {
	res.header("Cache-Control", "max-age=3000,public");
	res.header('Last-Modified', new Date().toUTCString());
	res.cookie('user','xxxxx',{ expires: new Date(Date.now() + 900000), httpOnly: true });
	res.json({
		status: 'success'
	});
})

module.exports = router;
