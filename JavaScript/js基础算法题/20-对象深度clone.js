function clone(obj){
    for(let prop in obj){
        return typeof obj[prop] == Object ? clone(obj[prop]) : obj[prop];
    }
}
var oPerson={
    oName:"rookiebob",
    oAge:"18",
    oAddress:{
        province:"beijing"
    },    
    ofavorite:[
        "swimming",
        {reading:"history book"}
    ],
    skill:function(){
        console.log("bob is coding");
    }
};
clone(oPerson);
