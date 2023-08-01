import { CircleDetail } from './CircleDetail';

interface CircleDetail20pxProps{
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export function CircleDetail20px({
  bottom, left, right, top, 
} : CircleDetail20pxProps) {
  return (
    <CircleDetail
      w="20px"
      shadow="0px 4px 80px rgba(248, 0, 119, 0.48), inset 0px 2px 10px rgba(255, 255, 255, 0.58), inset 10px 20px 100px #FF0505;"
      position="absolute"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    />
  );
}
