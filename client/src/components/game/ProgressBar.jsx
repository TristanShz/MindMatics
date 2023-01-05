import { memo } from "react";

const ProgressBar = memo(({ initialTime, timer }) => {
  return (
    <div className={"w-full h-4 border border-slate-50 relative"}>
      <div
        className={"bg-teal-500 h-full"}
        style={{ width: `${(100 * timer) / initialTime}%` }}
      />
    </div>
  );
});

export default ProgressBar;
