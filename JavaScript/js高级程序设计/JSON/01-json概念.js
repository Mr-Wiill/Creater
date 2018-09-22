/*
    json是一种数据类型。
    表示类型：
    1、简单值：数字，字符串（使用双引号）等；
    { 15 }
    { "hello world !" }

    2、对象（属性值需使用双引号）。1）对象里面还可以嵌套对象
    {
        "name" : "jack",
        "age" : 25,
        "school" : {            //嵌套对象
            "name" : "SIT",
            "location" : "ShangHai"
        }
    }

    3、数组；
    [25, "hi", true]        //简单数组

    //数组与对象的组合json
    [
        {
            "title" : "Professional JavaScript",
            "author" : [
                "Nicholas"
            ],
            "edition" : 3,
            "year" : 2011
        },
        {
            "title" : "Professional JavaScript",
            "author" : [
                "Nicholas",
                "Jeremy",
                "jeo"
            ],
            "edition" : 1,
            "year" : 2007
        },
    ]


*/