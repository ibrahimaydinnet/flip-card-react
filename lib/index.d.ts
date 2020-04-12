import * as React from 'react';
interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
    isFlipped?: boolean;
    speed?: number;
    onFlip?: (isFlipped: boolean) => void;
    vertical?: boolean;
    perspective?: boolean;
    infinite?: boolean;
}
declare const FlipCard: React.FC<FlipCardProps>;
export default FlipCard;
