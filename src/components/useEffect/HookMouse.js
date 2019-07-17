import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mousePosition = e => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", mousePosition);

    return () => {
      console.log("clean up function [unmount action]");
      window.removeEventListener("mousemove", mousePosition);
    };
  }, []);

  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
