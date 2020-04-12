import * as React from 'react';
interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
    isFlipped?: boolean;
    direction?: 'horizontal' | 'vertical';
    speed?: number;
    onFlip?: (isFlipped: boolean) => void;
    perspective?: boolean;
}
declare const FlipCard: React.FC<FlipCardProps>;
export default FlipCard;
