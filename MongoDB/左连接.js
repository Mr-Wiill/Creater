/* $lookup 实现左连接 */

// 集合1：orders

//   [
//     { _id: 1, product_id: 154, status: 1 }
//   ]


// 集合2：products

//  [
//     { _id: 154, name: '笔记本电脑' },
//     { _id: 155, name: '耳机' },
//     { _id: 156, name: '台式电脑' }
//   ]

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("runoob");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',            // 右集合
         localField: 'product_id',    // 左集合 join 字段
         foreignField: '_id',         // 右集合 join 字段
         as: 'orderdetails'           // 新生成字段（类型array）
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});