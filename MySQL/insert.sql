-- 插入单条数据
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );

-- 插入多条数据
INSERT INTO table_name  (field1, field2,...fieldN)  
VALUES  
(valueA1,valueA2,...valueAN),(valueB1,valueB2,...valueBN),(valueC1,valueC2,...valueCN)...;



/* 示例1 */
INSERT INTO table_name (id, title, username)
VALUES
(1, '标题', '张三'),
(2, '标题2', '李四'),
(3, '标题3', '王五')