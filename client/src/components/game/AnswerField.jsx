import Input from "../form/Input";
import Button from "../ui/Button";
import { memo, useEffect, useRef } from "react";
import { useGameContext } from "../../context/GameContext";
import { gameConfig } from "../../_config/gameConfig";

const AnswerField = memo(
  ({ calculation, setScore, setTimer, setUserAnswers, setAnswerState }) => {
    const { difficulty } = useGameContext();

    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, [inputRef]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputRef.current.value) {
        setAnswerState(gameConfig.answerState.CORRECT);
        setTimeout(() => {
          setAnswerState(undefined);
        }, 1000);
        const answer = parseInt(inputRef.current.value);
        if (answer === calculation.result) {
          setScore(
            (prevState) =>
              prevState +
              gameConfig.scorePerOperation[difficulty][calculation.operation]
          );
        } else {
          setAnswerState(gameConfig.answerState.WRONG);
          setTimeout(() => {
            setAnswerState(undefined);
          }, 1000);
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
      setAnswerState(gameConfig.answerState.SKIP);
      setTimeout(() => {
        setAnswerState(undefined);
      }, 1000);

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
          <Input
            type={"number"}
            ref={inputRef}
            className={"flex-1"}
            onKeyUp={(e) => {
              if (e.key === "s") {
                handleSkip();
              }
            }}
          />
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
