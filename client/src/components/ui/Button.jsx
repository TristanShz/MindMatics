import clsx from "clsx";

const Button = ({ fullWidth, large, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-violet-500 hover:bg-violet-600 border border-slate-50 text-lg font-medium",
        {
          "w-full": fullWidth,
          "h-14 text-xl px-12": large,
          "h-10 px-8": !large,
        }
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
