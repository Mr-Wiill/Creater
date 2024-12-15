var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        console.log(this.name);     // My Object
        return function () {
            return this.name;
        };

    }

};

alert(object.getNameFunc()());  // The Window