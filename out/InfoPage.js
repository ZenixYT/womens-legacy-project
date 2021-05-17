"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InfoPage = /** @class */ (function () {
    function InfoPage(name, cliSyntax, info) {
        this.name = name;
        this.cliSyntax = cliSyntax;
        this.info = info;
    }
    InfoPage.prototype.toString = function () {
        return this.name + "\n\n" + this.info;
    };
    return InfoPage;
}());
exports.default = InfoPage;
