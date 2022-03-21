import React, { Component, useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

export const Conditional = (props: any) => {
  const [targetElement] = useState(() => document.createElement('div'));
  const containerRef: any = useRef(undefined);

  const activatedRef = useRef(false);
  activatedRef.current = activatedRef.current || props.active;

  useLayoutEffect(() => {
    if (props.active) {
      containerRef?.current?.appendChild(targetElement);
    } else {
      try {
        containerRef?.current?.removeChild(targetElement);
      } catch (e) {}
    }
  }, [props.active]);
  return (
    <>
      <div ref={containerRef} />
      {activatedRef?.current &&
        ReactDOM.createPortal(props.children, targetElement)}
    </>
  );
};
