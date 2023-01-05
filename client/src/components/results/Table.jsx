import { useEffect, useState } from "react";

function difficultyLevel(level) {
  if (level === 1) return "EASY";
  if (level === 2) return "NORMAL";
  if (level === 3) return "HARD";
}

const getCellDataTestId = (difficulty) => {
  if (difficultyLevel(difficulty) === "EASY") return "easyCell";
  if (difficultyLevel(difficulty) === "NORMAL") return "normalCell";
  if (difficultyLevel(difficulty) === "HARD") return "hardCell";
};

const Table = (props) => {
  if (props.scores !== undefined)
    props.scores
      .sort((firstObject, secondObject) =>
        firstObject.score < secondObject.score ? 1 : -1
      )
      .map((score, index) => (score.id = index + 1));
  const [results, setResults] = useState();

  useEffect(() => {
    if (props.playerSelected && props.difficultySelected) {
      setResults(
        props.scores.filter(
          (score) =>
            score.user.username === props.playerSelected &&
            score.difficulty === props.difficultySelected
        )
      );
    } else if (props.playerSelected) {
      setResults(
        props.scores.filter(
          (score) => score.user.username === props.playerSelected
        )
      );
    } else if (props.difficultySelected) {
      setResults(
        props.scores.filter(
          (score) => score.difficulty === props.difficultySelected
        )
      );
    } else setResults(props.scores);
  }, [props.playerSelected, props.difficultySelected, props.scores]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-lg" data-testid="resultsTable">
              <thead className="bg-slate-800 border-b border-slate-800 uppercase text-slate-400">
                <tr>
                  <th scope="col" className="font-normal px-6 py-4 text-left">
                    Classement
                  </th>
                  <th scope="col" className="font-normal px-6 py-4 text-left">
                    Username
                  </th>
                  <th scope="col" className="font-normal px-6 py-4 text-left">
                    Score
                  </th>
                  <th scope="col" className="font-normal px-6 py-4 text-left">
                    Difficulty
                  </th>
                </tr>
              </thead>
              <tbody data-testid="tableBody">
                {results &&
                  results.map((result) => (
                    <tr
                      className="even:bg-slate-600 odd:bg-slate-700 border-b border-slate-800"
                      key={result.id}
                      data-testid="gridRow"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-200 text-left">
                        {result.id}
                      </td>
                      <td
                        className="text-slate-200 font-light px-6 py-4 whitespace-nowrap text-left"
                        data-testid={result.user.username}
                      >
                        {result.user.username}
                      </td>
                      <td className="text-slate-200 font-light px-6 py-4 whitespace-nowrap text-left">
                        {result.score}
                      </td>
                      <td
                        className="text-slate-200 font-light px-6 py-4 whitespace-nowrap text-left"
                        data-testid={getCellDataTestId(result.difficulty)}
                      >
                        {difficultyLevel(result.difficulty)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
