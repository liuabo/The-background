var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var GoodsModel = require("../model/Goods");
var md5 = require("md5");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/index1', function(req, res, next) {
  res.render('index1', {});
});

router.get('/regist', function(req, res, next) {
  res.render('regist', {});
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

//添加商品
router.get('/add', function(req, res, next) {
  res.render('add', {});
});

router.post('/goods/api/goods_upload', function(req, res, next) {
	var goods_name_01 = req.body.goods_name_01;
	var goods_sn = req.body.goods_sn;
	var shop_price = req.body.shop_price;
	var Simulation = req.body.Simulation;
	var repertory = req.body.repertory;
	var so = req.body.so;
	var ser = req.body.ser;
	var result = {
		code: 1,
		message: "成功"
	};

		// 添加商品
		var um = new GoodsModel();
		um.goods_name_01 = goods_name_01;
		um.goods_sn = goods_sn;
		um.shop_price = shop_price;
		um.Simulation = Simulation;
		um.repertory = repertory;
		um.flag = 1;
		um.so = so;
		um.ser = ser;
		um.save(function(err){
			if(err) {
				result.code = -110;
				result.message = "失败";
				res.send("失败");
			}
//			res.json(result);
		});
		GoodsModel.find({goods_name_01: goods_name_01}, (err, docs)=>{
		if(docs.length !== 0) {
			result.code = -101;
			result.message = "此商品已存在"
		}
		res.json(result);
	})

});



router.post("/api/gain", function(req, res, next) {
	var goods_name_01 = req.body.goods_name_01;
	var goods_sn = req.body.goods_sn;
	var shop_price = req.body.shop_price;
	var result = {
		code: 1,
		message: "成功"
	};
	
	
	GoodsModel.find({}, function(err, docs) {
//	  	console.log(docs);
			result.code = -109;
			result.message = "已添加商品"
			res.json(result);
	
		
	})
})



router.get('/dashboard', function(req, res, next) {
	//判断用户是否登录，如果没登录跳转到login页面。
	console.log(req.session);
	if(req.session == null || req.session.username == null) {
		// res.render('login', { title: '登录页面' });
		res.redirect("/login"); // 重定向
		return;
	}
	res.render('dashboard', {});
});

router.post("/api/login4ajax", function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var result = {
		code: 1,
		message: "登录成功"
	};
	UserModel.find({username: username, psw: md5(psw)}, (err, docs)=>{
		if(docs.length == 0) {
			result.code = -101;
			result.message = "您的账号或密码错误。请重新登录。"
		} else {
			// 登录成功的时候，生成session
			req.session.username = username;
		}
		res.json(result);
	})
})


router.post("/api/regist4ajax", function(req, res, next) {
	var username = req.body.username;
	var psw = req.body.psw;
	var result = {
		code: 1,
		message: "注册成功"
	};
	// 检查用户名是否被使用
	UserModel.find({username: username}, function (err, docs) {
		if(docs.length > 0) {
			result.code = -109;
			result.message = "您的用户名已经被占用，请使用别的用户名注册。";
			res.json(result);
			return;
		}

		// 注册用户
		var um = new UserModel();
		um.username = username;
		um.psw = md5(psw);
		um.save(function(err){
			if(err) {
				result.code = -110;
				result.message = "注册失败";
				res.send("注册失败");
			}
			res.json(result);
		});

	});
});


module.exports = router;
