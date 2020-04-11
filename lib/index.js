"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const style_1 = require("./style");
const components_1 = __importDefault(require("./components"));
;
const FlipCard = (props) => {
    const { front, back, isFlipped, direction, speed } = props;
    if (!front || !back) {
        throw new Error('FlipCard requires front and back components!');
    }
    const [flipped, flip] = react_1.useState(!!isFlipped);
    react_1.useEffect(() => {
        if (!!isFlipped !== flipped) {
            flip(!!isFlipped);
            if (props.onFlip) {
                props.onFlip(!!isFlipped);
            }
        }
    }, [isFlipped]);
    const frontProps = {
        speed,
        direction,
        deg: flipped ? 180 : 0,
        position: flipped ? 'relative' : 'absolute'
    };
    const backProps = {
        speed,
        direction,
        deg: flipped ? 0 : -180,
        position: flipped ? 'absolute' : 'relative'
    };
    return (React.createElement("div", { style: style_1.container },
        React.createElement("div", { style: style_1.card },
            React.createElement(components_1.default, Object.assign({}, frontProps, { style: { zIndex: 2 } }), front),
            React.createElement(components_1.default, Object.assign({}, backProps), back))));
};
FlipCard.defaultProps = {
    isFlipped: false,
    direction: 'horizontal',
    speed: 0.7
};
exports.default = FlipCard;
