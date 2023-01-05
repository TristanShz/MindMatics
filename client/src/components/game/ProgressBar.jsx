import { memo, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const ProgressBar = memo(({ initialTime, timer }) => {
  const controls = useAnimationControls();
  const progress = (timer / initialTime) * 100;
  useEffect(() => {
    const color =
      progress > 30 ? "#14b8a6" : progress > 10 ? "#f56565" : "#ef4444";
    controls.start({
      width: `${progress}%`,
      background: color,
    });
  }, [progress]);
  return (
    <div className={"w-full h-4 border border-slate-50 relative"}>
      <motion.div
        className={"h-full w-full"}
        animate={controls}
        transition={{ duration: 1, ease: "linear", type: "tween" }}
      />
    </div>
  );
});

export default ProgressBar;
