import React from 'react';
export interface FaceProps {
    speed?: number;
    deg: number;
    direction?: 'horizontal' | 'vertical';
    position: 'relative' | 'absolute';
    style?: React.CSSProperties;
}
declare const Face: React.FC<FaceProps>;
export default Face;
