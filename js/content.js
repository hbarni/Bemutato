"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                //undefined
        var tomb = [2,3];
        res.write(tomb[3]);
        

        res.write("<h1 style='color: blue;'>Teszt OK!</h1>");
        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/hbarni/Bemutato' target='_blank'>" +
            "https://github.com/hbarni/Bemutato</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
