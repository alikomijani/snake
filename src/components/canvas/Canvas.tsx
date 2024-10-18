import { forwardRef } from "react";

type CanvasProps = React.ComponentPropsWithoutRef<"canvas">;

export const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  function MyCanvas(props, ref) {
    return <canvas ref={ref} {...props} />;
  }
);
