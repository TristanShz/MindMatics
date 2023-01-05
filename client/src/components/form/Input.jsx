import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={clsx(
        className,
        "h-10 w-96 border border-slate-50 bg-transparent outline-none focus:border-violet-500 px-2"
      )}
    />
  );
});

export default Input;
