const ErrorMessage = (props) => {
  return <p className={"text-red-500 font-light text-sm"}>{props.children}</p>;
};

export default ErrorMessage;
