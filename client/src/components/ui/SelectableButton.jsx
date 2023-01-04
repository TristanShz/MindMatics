import clsx from "clsx";

const SelectableButton = ({ children, selected, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "h-14 border border-slate-50 w-64 flex items-center justify-center hover:cursor-pointer",
        {
          "bg-teal-500": selected,
          "hover:bg-teal-900": !selected,
        }
      )}
    >
      {children}
    </div>
  );
};

export default SelectableButton;
