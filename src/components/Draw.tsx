import { useEffect, useState } from "react";
import { ICursorPosition } from "../Hover";

export default function Draw() {
  const [cursorPosition, setCursorPosition] = useState<ICursorPosition | null>(
    null
  );
  const [prevCursorPosition, setPrevCursorPosition] =
    useState<ICursorPosition | null>(null);
  const [drawnPoints, setDrawnPoints] = useState<ICursorPosition[]>([]);
  const [width, setWidth] = useState(window.innerWidth * 0.3);
  const [height, setHeight] = useState(window.innerWidth * 0.3);
  let animationFrameId: number;

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth * 0.8);
      setWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const drawPoint = () => {
    if (prevCursorPosition && cursorPosition) {
      const deltaX = cursorPosition.x - prevCursorPosition.x;
      const deltaY = cursorPosition.y - prevCursorPosition.y;
      if (deltaX > 4 || deltaY > 2) {
        setDrawnPoints((prevPoints) => [...prevPoints, cursorPosition]);
      }
    }
    setPrevCursorPosition(cursorPosition);
    requestAnimationFrame(drawPoint);
  };

  requestAnimationFrame(drawPoint);
  useEffect(() => {
    animationFrameId = requestAnimationFrame(drawPoint);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition]);

  return (
    <canvas className="container" style={{ position: "relative" }}>
      {drawnPoints.map((point, index) => (
        <div
          key={index}
          className="drawedField"
          style={{
            left: point.x - width / 2,
            top: point.y - height / 2,
            width: width,
            height: height,
            position: "absolute",
          }}
        >
          Rita något coolt
        </div>
      ))}
    </canvas>
  );
}
