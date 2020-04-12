"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
;
const transform = vertical => deg => vertical ? `rotateX(${deg}deg)` : `rotateY(${deg}deg)`;
const Face = (props) => {
    const { speed, vertical, deg, position } = props;
    const style = Object.assign({ top: 0, left: 0, width: "100%", height: "100%", transition: `${speed}s`, WebkitTransition: `${speed}s`, msTransition: `${speed}s`, MozTransition: `${speed}s`, OTransition: `${speed}s`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", MozBackfaceVisibility: "hidden", transform: transform(vertical)(deg), WebkitTransform: transform(vertical)(deg), msTransform: transform(vertical)(deg), OTransform: transform(vertical)(deg), position }, props.style);
    return (react_1.default.createElement("div", { style: style }, props.children));
};
exports.default = Face;
