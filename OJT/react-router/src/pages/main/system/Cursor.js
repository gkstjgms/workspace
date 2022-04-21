import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";

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
    endX.current = clientX / 10;
    endY.current = clientY / 10;
  }, []);

  useEventListener("mousemove", onMouseMove, document);

  return (
    <Fragment>
      <div className="cursor" ref={cursorRef} />
    </Fragment>
  );
}

export default Cursor;
