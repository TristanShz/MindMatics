import clsx from "clsx";

const Button = ({ fullWidth, large, secondary, ...props }) => {
  return (
    <button
      {...props}
      className={clsx("text-lg font-medium border border-slate-50", {
        "bg-violet-500 hover:bg-violet-600": !secondary,
        "hover:border-violet-500 hover:text-violet-500": secondary,
        "w-full": fullWidth,
        "w-fit": !fullWidth,
        "h-14 text-xl px-12": large,
        "h-10 px-8": !large,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
