axios.post('/api/tabulate/tabulateExport',{
    tabulateId:this.tableId,
    condition:this.searchCondition.length>0?this.searchCondition:null,
    status:this.tableStatus
},
{
    responseType:'blob'
})
.then(res=>{
    if (res.status == 200) {
        let url = window.URL.createObjectURL(new Blob([res.data]))
        let link= document.createElement('a')
        link.style.display='none'
        link.href=url
        link.setAttribute('download', decodeURIComponent(res.headers['content-disposition'].split('=')[1]))  // 获取并设置下载文件名
        document.body.appendChild(link)
        link.click()
        this.$message.success('导出成功')
    } else {
        this.$message.error('导出失败，请稍后再试')
    }
})