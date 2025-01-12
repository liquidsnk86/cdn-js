"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cleanIndent;
export function cleanIndent(str) {
    const indents = str
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => { var _a, _b, _c; return (_c = (_b = (_a = line.match(/^[ \t]*/)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0; });
    const minIndent = Math.min(...indents);
    if (minIndent === 0)
        return str;
    const regex = new RegExp(`^[ \\t]{${minIndent}}`, "gm");
    return str.replace(regex, "").trim();
}
