"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styled = void 0;
var tailwind_merge_1 = require("tailwind-merge");
var styled = function (defaultClasses) {
    return function (classes) {
        return (0, tailwind_merge_1.twMerge)("".concat(defaultClasses, " ").concat(classes).trim()); // concat classes merged to tailwind
    };
};
exports.styled = styled;
