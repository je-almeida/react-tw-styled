import { twMerge } from "tailwind-merge";
export var twStyle = function (defaultClasses) {
    return function (classes) {
        return twMerge("".concat(defaultClasses, " ").concat(classes).trim()); // concat classes merged to tailwind
    };
};
