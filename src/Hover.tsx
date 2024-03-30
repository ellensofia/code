interface Prop {
  cursorPosition: {
    x: number;
    y: number;
  };
}

export default function Hover({ cursorPosition }: Prop) {
  return (
    <>
      {cursorPosition.x !== -1 && cursorPosition.y !== -1 && (
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
            backgroundColor: "pink",
          }}
        />
      )}
    </>
  );
}
