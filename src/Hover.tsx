export interface ICursorPosition {
  x: number;
  y: number;
}

export default function Hover(cursorPosition: ICursorPosition) {
  return (
    <>
      <div
        className="circle"
        style={{
          position: "absolute",
          top: cursorPosition.y,
          left: cursorPosition.x,
          width: "48vw",
          transform: "translate(-25%) ",
          height: "42vw",
          borderRadius: "50%",
          filter: "blur(60px) drop-shadow(3px 3px red) hue-rotate(90deg) ",
          opacity: 0.2,
          cursor: "none",
          zIndex: 89,
          backgroundColor: "pink",
        }}
      />
    </>
  );
}
