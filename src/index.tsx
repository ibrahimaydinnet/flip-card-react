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
    direction?: 'horizontal' | 'vertical';
    speed?: number;
    onFlip?: (isFlipped: boolean) => void;
    perspective? : boolean;
};

const FlipCard: React.FC<FlipCardProps> = (props) => {
    const {front, back, isFlipped, direction, speed, perspective} = props;
    if (!front || !back) {
        throw new Error('FlipCard requires front and back components!');
    }

    const [flipped, flip] = useState(!!isFlipped);
    useEffect(() => {
        if (!!isFlipped !== flipped) {
            flip(!!isFlipped);
            if (props.onFlip) {
                props.onFlip(!!isFlipped);
            }
        }
    }, [isFlipped]);

    const frontProps: FaceProps = {
        speed,
        direction,
        deg: flipped ? 180 : 0,
        position: flipped ? 'relative' : 'absolute'
    };
    const backProps: FaceProps = {
        speed,
        direction,
        deg: flipped ? 0 : -180,
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
    direction: 'horizontal',
    speed: 0.7
};

export default FlipCard;
