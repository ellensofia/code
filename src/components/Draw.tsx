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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [backgroundColor, setBackgroundColor] = useState("var(--color-bg)");
  let animationFrameId: number;
  const colors = ["#70d3d3", "#99FFFF", "#66CCCC", "#33CCCC", "#00CCCC"];
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth * 0.23);
      setWidth(window.innerWidth * 0.23);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let activeColor = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMouseMove = (e: MouseEvent) => {
    drawPoint();
    setCursorPosition({ x: e.clientX, y: e.clientY });

    if (drawnPoints.length > 4) {
      //activeColor++;
      const randomI = Math.floor(Math.random() * 5);
      setColor(colors[randomI]);

      //setColor(colors[activeColor]);

      if (colors.length - 1 > activeColor) {
        console.log(
          "if true, colors.length: " +
            colors.length +
            "activeColor: " +
            activeColor
        );
        // setColor(colors[activeColor]);
      } else {
        activeColor = 0;
        setColor(colors[activeColor]);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);

  const drawPoint = () => {
    if (prevCursorPosition && cursorPosition) {
      const deltaX = cursorPosition.x - prevCursorPosition.x;
      const deltaY = cursorPosition.y - prevCursorPosition.y;
      if (deltaX > 4 || deltaY > 2) {
        setDrawnPoints((prevPoints) => [...prevPoints, cursorPosition]);
      }
    }
    if (drawnPoints.length > 460) {
      console.log("mer än 10");
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
