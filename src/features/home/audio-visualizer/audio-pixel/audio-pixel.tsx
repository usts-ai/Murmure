import clsx from 'clsx';
import { getPixelColor } from './audio-pixel.helpers';

interface AudioPixelProps {
    isLit: boolean;
    distanceFromCenter: number;
    isEdgeColumn: boolean;
    isCenterColumn: boolean;
    hasSound: boolean;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const AudioPixel = ({
    isLit,
    distanceFromCenter,
    isEdgeColumn,
    isCenterColumn,
    hasSound,
    width = 12,
    height = 6,
    className,
    ...props
}: AudioPixelProps) => {
    return (
        <div
            className={clsx('border-none', className)}
            style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: isLit
                    ? getPixelColor(
                          distanceFromCenter,
                          isEdgeColumn,
                          isCenterColumn,
                          hasSound
                      )
                    : 'transparent',
            }}
            {...props}
        />
    );
};
