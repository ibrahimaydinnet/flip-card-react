import React from 'react';

export interface FaceProps {
    speed?: number;
    deg: number;
    vertical: boolean;
    position: 'relative' | 'absolute';
    style?: React.CSSProperties;
};

type TransformType = (vertical?: boolean) => (deg: number) => string;

const transform: TransformType = vertical => deg => vertical ? `rotateX(${deg}deg)` : `rotateY(${deg}deg)`;

const Face: React.FC<FaceProps> = (props) => {
    const { speed, vertical, deg, position } = props;
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
        transform: transform(vertical)(deg),
        WebkitTransform: transform(vertical)(deg),
        msTransform: transform(vertical)(deg),
        OTransform: transform(vertical)(deg),
        position,
        ...props.style
    };
    return (
        <div style={style}>{props.children}</div>
    );
};

export default Face;
