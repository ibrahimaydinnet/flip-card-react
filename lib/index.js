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
const face_1 = __importDefault(require("./face"));
const cardStyle = {
    width: '100%',
    height: '100%',
    position: 'relative'
};
const perspectiveStyle = {
    transform: "perspective(1000px)",
    msTransform: "perspective(1000px)",
    WebkitTransform: "perspective(1000px)",
    transformStyle: "preserve-3d",
    MozTransformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d"
};
;
const FlipCard = (props) => {
    const { front, back, isFlipped, vertical, speed, perspective, infinite } = props;
    if (!front || !back) {
        throw new Error('FlipCard requires front and back components!');
    }
    const [flipped, flip] = react_1.useState(!!isFlipped);
    const [deg, rotate] = react_1.useState(0);
    react_1.useEffect(() => {
        if (!!isFlipped !== flipped) {
            flip(!!isFlipped);
            if (props.onFlip) {
                props.onFlip(!!isFlipped);
            }
            if (!!infinite) {
                rotate(x => x + 180);
            }
        }
    }, [isFlipped]);
    const frontProps = {
        speed,
        vertical: !!vertical,
        deg: !!infinite ? deg : flipped ? 180 : 0,
        position: flipped ? 'relative' : 'absolute'
    };
    const backProps = {
        speed,
        vertical: !!vertical,
        deg: !!infinite ? deg + 180 : flipped ? 0 : -180,
        position: flipped ? 'absolute' : 'relative'
    };
    return (React.createElement("div", { style: perspective ? Object.assign(Object.assign({}, cardStyle), perspectiveStyle) : cardStyle },
        React.createElement(face_1.default, Object.assign({}, frontProps, { style: { zIndex: 2 } }), front),
        React.createElement(face_1.default, Object.assign({}, backProps), back)));
};
FlipCard.defaultProps = {
    isFlipped: false,
    speed: 0.7
};
exports.default = FlipCard;
