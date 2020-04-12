import * as React from 'react';
import {useState, useEffect} from 'react';
import Face, {FaceProps} from './face';

const cardStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative'
};

const perspectiveStyle: React.CSSProperties = {
    transform: "perspective(1000px)",
    msTransform: "perspective(1000px)",
    WebkitTransform: "perspective(1000px)",
    transformStyle: "preserve-3d",
    MozTransformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d"
};

interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
    isFlipped?: boolean;
    speed?: number;
    onFlip?: (isFlipped: boolean) => void;
    vertical?: boolean;
    perspective? : boolean;
    infinite?: boolean;
};

const FlipCard: React.FC<FlipCardProps> = (props) => {
    const {front, back, isFlipped, vertical, speed, perspective, infinite} = props;
    if (!front || !back) {
        throw new Error('FlipCard requires front and back components!');
    }

    const [flipped, flip] = useState(!!isFlipped);
    const [deg, rotate] = useState(0);

    useEffect(() => {
        if (!!isFlipped !== flipped) {
            flip(!!isFlipped);
            if (props.onFlip) {
                props.onFlip(!!isFlipped);
            }
            if (!!infinite) {
                rotate(x => x + 180)
            }
        }
    }, [isFlipped]);

    const frontProps: FaceProps = {
        speed,
        vertical: !!vertical,
        deg: !!infinite ? deg : flipped ? 180 : 0,
        position: flipped ? 'relative' : 'absolute'
    };
    const backProps: FaceProps = {
        speed,
        vertical: !!vertical,
        deg: !!infinite ? deg + 180 : flipped ? 0 : -180,
        position: flipped ? 'absolute' : 'relative'
    };

    return (
        <div style={perspective ? {...cardStyle, ...perspectiveStyle} : cardStyle}>
            <Face {...frontProps} style={{zIndex:2}}>{front}</Face>
            <Face {...backProps}>{back}</Face>
        </div>
    );
};

FlipCard.defaultProps = {
    isFlipped: false,
    speed: 0.7
};

export default FlipCard;
