var express = require('express');
var router = express.Router();
var GoodsModel = require("../model/Goods");

router.get('/add', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/gain', function(req, res, next) {
//	var condition = req.query.condition;
	// 注意代码的健壮性
	// 测试中，有异常系测试。 后端最头疼的是异常系测试。
	var pageNO = req.body.pageNO || 1;
	pageNO = parseInt(pageNO);
	var perPageCnt = req.body.perPageCnt || 10;
	perPageCnt = parseInt(perPageCnt);
	var keyword = req.body.keyword;
	GoodsModel.count({goods_name_01: {$regex: keyword}}, function(err, count){
		console.log("数量:" + count);
		var query = GoodsModel.find({goods_name_01: {$regex: keyword}})
		.skip((pageNO-1)*perPageCnt).limit(perPageCnt);
		query.exec(function(err, docs){
//			console.log(err, docs);
			var result = {
				total: count,
				data: docs,
				pageNO: pageNO,
				perPageCnt: perPageCnt
			}
			console.log(perPageCnt)
			res.json(result);
		});
	})
});

module.exports = router;
