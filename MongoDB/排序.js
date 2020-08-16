// 排序 使用 sort() 方法，该方法接受一个参数，规定是升序(1)还是降序(-1)

// { type: 1 }         // 按 type 字段升序
// { type: -1 }        // 按 type 字段降序

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var mysort = { type: 1 };
    dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});