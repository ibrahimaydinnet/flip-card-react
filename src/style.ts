import React from 'react';
const card: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative"
};

const container: React.CSSProperties = {
    zIndex: "auto",
    transform: "perspective(1000px)",
    WebkitTransform: "perspective(1000px)",
    msTransform: "perspective(1000px)",
    OTransform: "perspective(1000px)",
    transformStyle: "flat",
    WebkitTransformStyle: "flat",
    MozTransformStyle: "flat"
};

export {
    card,
    container
};
