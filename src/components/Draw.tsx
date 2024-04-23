import { useEffect, useState } from "react";
import { ICursorPosition } from "../Hover";

export default function Draw() {
  const [cursorPosition, setCursorPosition] = useState<ICursorPosition | null>(
    null
  );
  const [prevCursorPosition, setPrevCursorPosition] =
    useState<ICursorPosition | null>(null);
  const [drawnPoints, setDrawnPoints] = useState<ICursorPosition[]>([]);
  const [width, setWidth] = useState(window.innerWidth * 0.23);
  const [height, setHeight] = useState(window.innerWidth * 0.23);
  const [backgroundColor] = useState("var(--color-bg)");
  let animationFrameId: number;
  /*   let colors = ["#99FFFF", "#33CCCC", "#ff99b9", "#c74763"];
   */ let colors = ["#3cebeb", "#33CCCC", "#e05371", "#c74763"];
  const [color, setColor] = useState(colors[0]);
  let activeColor = 0;

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth * 0.23);
      setWidth(window.innerWidth * 0.23);
    };

    const onMouseMove = (e: MouseEvent) => {
      drawPoint();
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setColor(colors[0]);

      if (drawnPoints.length > 20) {
        //activeColor++;
        const randomI = Math.floor(Math.random() * 2);
        setColor(colors[randomI]);

        //setColor(colors[activeColor]);

        if (colors.length - 1 > activeColor) {
          // setColor(colors[activeColor]);
        } else {
          activeColor = 0;
          setColor(colors[activeColor]);
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [drawnPoints]);

  const drawPoint = () => {
    if (prevCursorPosition && cursorPosition) {
      const deltaX = cursorPosition.x - prevCursorPosition.x;
      const deltaY = cursorPosition.y - prevCursorPosition.y;
      if (deltaX > 4 || deltaY > 2) {
        setDrawnPoints((prevPoints) => [...prevPoints, cursorPosition]);
      }
    }

    if (drawnPoints.length > 360) {
      colors = ["#e05371", "#c74763"];
      setDrawnPoints([]);
    }
    setPrevCursorPosition(cursorPosition);
  };

  useEffect(() => {
    animationFrameId = requestAnimationFrame(drawPoint);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition]);

  return (
    <div
      className="container"
      style={{ position: "relative", backgroundColor: backgroundColor }}
    >
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
            background: color,
          }}
        />
      ))}
    </div>
  );
}
