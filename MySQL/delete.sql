/* 删除一条数据 */
DELETE FROM table_name WHERE id=3;

/* 左连接 删除两表数据 */
delete notes,files from notes left join files on notes.noteId=files.noteId where notes.noteId='${req.body.id}'