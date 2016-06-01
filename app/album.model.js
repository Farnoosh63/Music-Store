System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Album;
    return {
        setters:[],
        execute: function() {
            Album = (function () {
                function Album(name, id) {
                    this.name = name;
                    this.id = id;
                    this.done = false;
                    this.artist = "";
                    this.price = 0;
                    this.genre = "";
                }
                return Album;
            }());
            exports_1("Album", Album);
        }
    }
});
//# sourceMappingURL=album.model.js.map