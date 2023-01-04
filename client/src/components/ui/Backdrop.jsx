import clsx from "clsx";

const Backdrop = ({ zIndex, ...props }) => {
  return (
    <div
      {...props}
      className={clsx("absolute inset-0 bg-slate-900 opacity-95", {
        "z-15": zIndex === 15,
        "z-25": zIndex === 25,
        "z-35": zIndex === 35,
        "z-45": zIndex === 45,
        "z-40": !zIndex,
      })}
    />
  );
};

export default Backdrop;
