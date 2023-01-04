import Button from "./Button";
import Dialog from "./Dialog";

const defaultTexts = {
  validate: "Yes",
  cancel: "Cancel",
};

const ValidationDialog = ({
  onValidate,
  texts,
  onCancel,
  closeDialog,
  isOpen,
}) => {
  return (
    <Dialog closeDialog={closeDialog} isOpen={isOpen}>
      <div className={"flex flex-col gap-4"}>
        <div>
          <span className={"text-slate-400"}>{texts.head}</span>
        </div>
        <span
          className={
            "whitespace-pre-line text-sm leading-relaxed text-slate-50"
          }
        >
          {texts.body}
        </span>
        <div className={"mt-6 flex gap-4 self-end"}>
          <Button
            secondary
            type={"button"}
            onClick={() => {
              if (onCancel) onCancel();
              else closeDialog();
            }}
          >
            {texts?.cancel ? texts.cancel : defaultTexts.cancel}
          </Button>
          <Button
            type={"button"}
            onClick={() => {
              onValidate();
              closeDialog();
            }}
          >
            {texts?.validate ? texts.validate : defaultTexts.validate}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ValidationDialog;
