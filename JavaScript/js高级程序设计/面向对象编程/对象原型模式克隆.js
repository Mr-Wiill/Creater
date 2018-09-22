function Master(){
    this.blood = 100;
    this.level = 6;
}

var noumenon = new Master();
noumenon.level = 9;

var ektype = Object.create(noumenon);   //克隆
console.log(ektype.level);