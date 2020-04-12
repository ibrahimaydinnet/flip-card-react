import React from 'react';
export interface FaceProps {
    speed?: number;
    deg: number;
    vertical: boolean;
    position: 'relative' | 'absolute';
    style?: React.CSSProperties;
}
declare const Face: React.FC<FaceProps>;
export default Face;
