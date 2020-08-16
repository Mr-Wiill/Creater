/* 以下实例使用 Promise 创建集合： */

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/runoob";
MongoClient.connect(url, { useNewUrlParser: true }).then((conn) => {
    console.log("数据库已连接");
    var dbase = conn.db("runoob");
    dbase.createCollection("site").then((res) => {
        console.log("已创建集合");
    }).catch((err) => {
        console.log("数据库操作错误");
    }).finally(() => {
        conn.close();
    });
}).catch((err) => {
    console.log("数据库连接失败");
});



/* 现在我们在一个程序中实现四个连续操作：增加 、查询 、更改 、删除。 */

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/";
MongoClient.connect(url, { useNewUrlParser: true }).then((conn) => {
    console.log("数据库已连接");
    const test = conn.db("testdb").collection("test");
    // 增加
    test.insertOne({ "site": "runoob.com" }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).then(() => {
        // 更改
        return test.updateMany({ "site": "runoob.com" },
            { $set: { "site": "example.com" } });
    }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).then(() => {
        // 删除
        return test.deleteMany({ "site": "example.com" });
    }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).catch((err) => {
        console.log("数据操作失败" + err.message);
    }).finally(() => {
        conn.close();
    });
}).catch((err) => {
    console.log("数据库连接失败");
});