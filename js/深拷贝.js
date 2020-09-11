function DeepCopy(data, val){
    let obj = val || {}
    for (const key in data) {
        if (typeof data[key] === 'object') {
            Array.isArray(data[key]) ? DeepCopy(data[key], []) : DeepCopy(data[key])
        } else {
            obj[key] = data[key]
        }
    }
    return obj
}