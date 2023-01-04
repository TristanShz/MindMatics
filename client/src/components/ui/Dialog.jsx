import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";

const Dialog = ({ children, closeDialog, isOpen }) => {
  if (!isOpen) return null;
  return createPortal(
    <>
      <Backdrop
        zIndex={45}
        onClick={() => {
          if (closeDialog) closeDialog();
        }}
      />
      <div
        className={
          "absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded border border-slate-50 bg-slate-800 p-4 shadow-lg shadow-slate-800"
        }
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Dialog;
