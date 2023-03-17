var expressJWT = require('express-jwt');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");


var insetrRouter = require('./routes/medicine/insert');

var registerRouter = require('./routes/user/register');
var loginRouter = require('./routes/user/login');

var selectAllRouter = require('./routes/medicine/selectAll');
var selectUserListRouter = require('./routes/user/userList')
var selectAdminListRouter = require('./routes/user/adminList')
var getMedicineInfoByIdRouter = require('./routes/medicine/selectById')

var orderByBuyRouter = require('./routes/medicine/orderByBuy')
var orderBySaleRouter = require('./routes/medicine/orderBySale')
var orderByProfitRouter = require('./routes/medicine/orderByProfit')

var deleteMedicineRouter = require('./routes/medicine/delete')

var searchRouter = require('./routes/medicine/search')
var updatedRouter = require("./routes/medicine/updated")
var insertTestRouter = require("./routes/test/InsertTest")
var insertMedicineOperateRouter = require('./routes/medicine/insertOperate')
var selectMedicineOperateRouter = require('./routes/medicine/selectOperate')
var updateMedicineOperateRouter = require('./routes/medicine/updateOperate')

var insertOperateRouter = require('./routes/operate/insert')
var selectAllOperateRouter = require('./routes/operate/selectAll')
var selectOperateRouter = require('./routes/operate/select')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJWT({
  secret: "medicine",
  algorithms: ['HS256'],
  // getToken: req => { 
  //   console.log(req.headers.token)
  //   return "Bearer "+req.header.token
  //  }
}).unless({
  path: ['/login', '/register']
}))



app.use('/insertOperate', insertOperateRouter)
app.use("/insert", insetrRouter)
app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use("/selectAll", selectAllRouter)
app.use("/selectUserList", selectUserListRouter)
app.use("/selectAdminList", selectAdminListRouter)
app.use('/orderByBuy', orderByBuyRouter)
app.use('/orderBySale', orderBySaleRouter)
app.use('/orderByProfit', orderByProfitRouter)
app.use('/deleteMedicine', deleteMedicineRouter)
app.use('/search', searchRouter)
app.use("/updated", updatedRouter)
app.use('/insertMedicineOperate', insertMedicineOperateRouter)
app.use('/selectMedicineOperate', selectMedicineOperateRouter)
app.use('/updateMedicineOperate', updateMedicineOperateRouter)
app.use("/insertTest", insertTestRouter)

app.use('/selectAllOperate', selectAllOperateRouter)
app.use('/selectOperate', selectOperateRouter)
app.use('/insertOperate', insertOperateRouter)
app.use('/getMedicineInfoById', getMedicineInfoByIdRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.status === 401) {
    return res.status(200).send({
      code:401,
      data:"token失效"
    })
  }
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
