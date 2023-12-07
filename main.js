"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        captain: 'Chris Evans',
        spiderman: 'Tom Holland'
    };
    const { spiderman } = avengers;
    const printAvengers = (_a) => {
        var { nick, vision } = _a, resArg = __rest(_a, ["nick", "vision"]);
        console.log(nick);
        console.log(vision);
        console.log(resArg);
    };
    const heroes = ['ironman', 'spiderman', 'thor', 'hulk', 'capitan america'];
    const [iron, , thor, ...resto] = heroes;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        power: 100
    };
    const thor = {
        name: 'Thor',
        power: 90
    };
    const capitan = {
        name: 'Capitan America',
        power: 80
    };
    const heros = [ironman, thor, capitan];
    for (const avenger of heros) {
        console.log(avenger.name);
    }
})();
(() => {
    const name = 'Tony';
    const getName = () => {
        return name;
    };
})();
//# sourceMappingURL=main.js.map