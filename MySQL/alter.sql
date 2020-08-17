-- 删除，添加或修改表字段

-- 删除i字段
ALTER TABLE table_name DROP i;

-- 添加i字段并定义类型
ALTER TABLE table_name ADD i INT;

-- 修改字段名
ALTER TABLE table_name CHANGE j j INT;