function clone(obj){
    for( prop in obj){
        return typeof obj[prop] == Object ? clone(obj[prop]) : obj[prop];
    }
}
var oPerson={
    oName:"bob",
    oAge:"18",
    oAddress:{
        province:"beijing"
    },    
    ofavorite:[
        "swimming",
        {reading:"business book"}
    ],
    skill:function(){
        console.log("bob is coder");
    }
};
console.log(clone(oPerson));
