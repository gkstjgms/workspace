import React, { Fragment, Component, useCallback, useEffect, useRef, useState } from "react";

// 분석 필요

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (e) => savedHandler.current(e);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function Cursor() {
  const cursorRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorRef.current.style.top = clientY + "px";
    cursorRef.current.style.left = clientX + "px";
    endX.current += (clientX - coords.x) / 10;
    endY.current += (clientY - coords.y) / 10;
  }, []);

  useEventListener("mousemove", onMouseMove, document);

  const styles = {
    cursor: {
      zIndex: 999,
      position: "fixed",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      width: 40,
      height: 40,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 255, 255, 1)",
      backgroundSize: "cover",
      backdropFilter: "sepia(20%)",
      transition: "all 0.3 ease",
      transitionProperty: "transform",
      mixBlendMode: "difference",
    },
  };

  return (
    <Fragment>
      <div ref={cursorRef} style={styles.cursor} />
    </Fragment>
  );
}

export default Cursor;
