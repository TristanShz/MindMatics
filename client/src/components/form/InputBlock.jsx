const InputBlock = (props) => {
  return (
    <div>
      <p className={"text-slate-500 text-lg mb-1"}>{props.label}</p>
      {props.children}
    </div>
  );
};

export default InputBlock;
