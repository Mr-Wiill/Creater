-- 组合两个以上select语句

/* 示例1 */
SELECT country FROM Websites
UNION
SELECT country FROM apps
ORDER BY country;


/* 示例2 */
SELECT country, name FROM Websites
WHERE country='CN'
UNION ALL
SELECT country, app_name FROM apps
WHERE country='CN'
ORDER BY country;