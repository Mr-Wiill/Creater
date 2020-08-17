-- 模糊查询
SELECT * from table_name  WHERE user_name LIKE '李%';   -- 以李开头的所有数据


/* 

匹配规则：

'%a'     //以a结尾的数据
'a%'     //以a开头的数据
'%a%'    //含有a的数据
'_a_'    //三位且中间字母是a的
'_a'     //两位且结尾字母是a的
'a_'     //两位且开头字母是a的

 */