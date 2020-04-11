import React from 'react';

export interface FaceProps {
    speed?: number;
    deg: number;
    direction?: 'horizontal' | 'vertical';
    position: 'relative' | 'absolute';
    style?: React.CSSProperties;
};

type TransformType = (direction?: 'horizontal' | 'vertical') => (deg: number) => string;

const transform: TransformType = direction => deg => direction === 'horizontal' ? `rotateY(${deg}deg)` : `rotateX(${deg}deg)`;

const Face: React.FC<FaceProps> = (props) => {
    const { speed, direction, deg, position } = props;
    const style: React.CSSProperties = {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: `${speed}s`,
        WebkitTransition: `${speed}s`,
        msTransition: `${speed}s`,
        MozTransition: `${speed}s`,
        OTransition: `${speed}s`,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        MozBackfaceVisibility: "hidden",
        transform: transform(direction)(deg),
        WebkitTransform: transform(direction)(deg),
        msTransform: transform(direction)(deg),
        OTransform: transform(direction)(deg),
        position,
        ...props.style
    };
    return (
        <div style={style}>{props.children}</div>
    );
};

export default Face;
