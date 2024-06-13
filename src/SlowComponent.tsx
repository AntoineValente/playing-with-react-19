import { useEffect } from "react";

const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const SlowComponent = () => {
  wait(300);
  useEffect(() => {
    console.log("re-render slow component");
  });

  return <div>Slow component</div>;
};
