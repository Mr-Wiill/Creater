var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        console.log(1, this.name);     // My Object
        return function () {
            return this.name;
        };

    }

};

console.log(2, object.getNameFunc()());  // The Window