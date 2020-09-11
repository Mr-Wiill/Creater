function copy(data){
    let obj = new Object()
    for (const key in data) {
        obj[key] = data[key]
    }
    return obj
}