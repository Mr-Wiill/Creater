-- 创建数据表
CREATE TABLE table_name (column_name column_type);

/* 实例1 */
CREATE TABLE  table_name(
   id INT NOT NULL,
   title VARCHAR(100) NOT NULL,
   user_name VARCHAR(40) NOT NULL,
   date DATE,
   PRIMARY KEY ( id )
);


-- 删除表
DROP TABLE table_name;