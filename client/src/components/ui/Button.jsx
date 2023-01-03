import clsx from "clsx";

const Button = ({ fullWidth, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-violet-500 hover:bg-violet-600 border border-slate-50 h-10 px-8 text-lg font-medium",
        {
          "w-full": fullWidth,
        }
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
