import Input from "../form/Input";
import Button from "../ui/Button";
import { memo, useEffect, useRef } from "react";
import { gameConfig } from "../../_config/gameConfig";
import { useGameContext } from "../../context/GameContext";

const AnswerField = memo(
  ({ calculation, setScore, setTimer, setUserAnswers }) => {
    const { difficulty } = useGameContext();

    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, [inputRef]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputRef.current.value) {
        const answer = parseInt(inputRef.current.value);
        if (answer === calculation.result) {
          setScore(
            (prevState) =>
              prevState +
              gameConfig.scorePerOperation[difficulty][calculation.operation]
          );
        } else {
          setTimer((prevState) => prevState - gameConfig.penalty.wrongAnswer);
        }
        setUserAnswers((prevState) => [
          ...prevState,
          {
            calculation,
            answer,
          },
        ]);
        inputRef.current.value = "";
      }
    };

    const handleSkip = () => {
      setTimer((prevState) => prevState - gameConfig.penalty.skip);
      setUserAnswers((prevState) => [
        ...prevState,
        {
          calculation,
          answer: null,
        },
      ]);
    };

    return (
      <div>
        <form className={"flex gap-2 w-full"} onSubmit={handleSubmit}>
          <Input type={"number"} ref={inputRef} className={"flex-1"} />
          <Button type={"submit"}>Validate</Button>
          <Button type={"button"} secondary onClick={handleSkip}>
            Skip
          </Button>
        </form>
      </div>
    );
  }
);

export default AnswerField;
