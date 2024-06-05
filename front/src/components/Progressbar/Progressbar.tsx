import "./progress.css";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

export default function Progressbar({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  const amountToIncrease = 100 / total;
  const initialValue =
    current > 1 ? `${amountToIncrease * current - amountToIncrease} ` : "0%";

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope || !animate) return;

    animate(scope.current, {
      width: `${amountToIncrease * current}%`,
    });
    animate(
      scope.current,
      {
        x: [`-10px`, "10px", "0px"],
        y: [`5px`, "-5px", "0px"],
      },
      { duration: 0.2 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="progress">
      <motion.div
        className="progress-value"
        ref={scope}
        initial={{ width: "0%" }}
        animate={{ width: `${amountToIncrease * current}` }}
      ></motion.div>
    </div>
  );
}
